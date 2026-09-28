import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const staticDirectory = path.join(rootDirectory, 'dist');
const port = Number(process.env.PORT || 8080);
const maxBodySize = 24 * 1024;
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 5;
const requestLog = new Map();

const loadLocalEnvironment = () => {
    if (process.env.NODE_ENV === 'production') return;

    const environmentPath = path.join(rootDirectory, '.env.local');
    if (!existsSync(environmentPath)) return;

    for (const line of readFileSync(environmentPath, 'utf8').split(/\r?\n/)) {
        const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
        if (!match || process.env[match[1]]) continue;

        const value = match[2].trim().replace(/^(['"])(.*)\1$/, '$2');
        process.env[match[1]] = value;
    }
};

loadLocalEnvironment();

const gmailUser = process.env.GMAIL_USER?.trim();
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
const contactRecipient = process.env.CONTACT_TO?.trim() || gmailUser;
const mailConfigured = Boolean(gmailUser && gmailAppPassword && contactRecipient);

const transporter = mailConfigured
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailAppPassword },
    })
    : null;

const mimeTypes = {
    '.css': 'text/css; charset=utf-8',
    '.gif': 'image/gif',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

const securityHeaders = {
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
};

const sendJson = (response, statusCode, payload) => {
    response.writeHead(statusCode, {
        ...securityHeaders,
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json; charset=utf-8',
    });
    response.end(JSON.stringify(payload));
};

const getClientAddress = (request) => {
    const forwarded = request.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
    return request.socket.remoteAddress || 'unknown';
};

const isRateLimited = (address) => {
    const now = Date.now();
    const recentRequests = (requestLog.get(address) || []).filter((timestamp) => now - timestamp < rateLimitWindowMs);
    recentRequests.push(now);
    requestLog.set(address, recentRequests);
    return recentRequests.length > rateLimitMaxRequests;
};

const readJsonBody = (request) => new Promise((resolve, reject) => {
    let rawBody = '';

    request.on('data', (chunk) => {
        rawBody += chunk;
        if (Buffer.byteLength(rawBody) > maxBodySize) {
            reject(new Error('payload_too_large'));
            request.destroy();
        }
    });
    request.on('end', () => {
        try {
            resolve(JSON.parse(rawBody || '{}'));
        } catch {
            reject(new Error('invalid_json'));
        }
    });
    request.on('error', reject);
});

const cleanText = (value, maxLength) => typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleContactRequest = async (request, response) => {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        sendJson(response, 405, { ok: false });
        return;
    }

    if (!mailConfigured || !transporter) {
        sendJson(response, 503, { ok: false, code: 'mail_not_configured' });
        return;
    }

    if (isRateLimited(getClientAddress(request))) {
        sendJson(response, 429, { ok: false, code: 'rate_limited' });
        return;
    }

    try {
        const body = await readJsonBody(request);
        const name = cleanText(body.name, 120);
        const email = cleanText(body.email, 254).toLowerCase();
        const dialCode = cleanText(body.dialCode, 8);
        const phone = cleanText(body.phone, 40);
        const company = cleanText(body.company, 160);
        const message = cleanText(body.message, 5000);
        const website = cleanText(body.website, 200);

        if (website) {
            sendJson(response, 200, { ok: true });
            return;
        }

        if (!name || !emailPattern.test(email) || !message) {
            sendJson(response, 400, { ok: false, code: 'invalid_fields' });
            return;
        }

        const subjectName = name.replace(/[\r\n]+/g, ' ');
        const subjectCompany = company.replace(/[\r\n]+/g, ' ');
        const emailText = [
            `Nombre: ${name}`,
            `Email: ${email}`,
            `Teléfono: ${phone ? `${dialCode} ${phone}`.trim() : 'No informado'}`,
            `Empresa: ${company || 'No informada'}`,
            '',
            'Mensaje:',
            message,
        ].join('\n');

        await transporter.sendMail({
            from: `NODAI Web <${gmailUser}>`,
            to: contactRecipient,
            replyTo: { name, address: email },
            subject: `Consulta web de ${subjectName}${subjectCompany ? ` - ${subjectCompany}` : ''}`,
            text: emailText,
        });

        sendJson(response, 201, { ok: true });
    } catch (error) {
        console.error('Contact email failed:', error instanceof Error ? error.message : error);
        sendJson(response, 500, { ok: false, code: 'send_failed' });
    }
};

const serveStaticFile = (request, response, pathname) => {
    const requestedPath = pathname === '/' ? 'index.html' : decodeURIComponent(pathname).replace(/^\/+/, '');
    let filePath = path.resolve(staticDirectory, requestedPath);
    const isInsideStaticDirectory = filePath === staticDirectory || filePath.startsWith(`${staticDirectory}${path.sep}`);

    if (!isInsideStaticDirectory) {
        response.writeHead(403, securityHeaders);
        response.end('Forbidden');
        return;
    }

    if (!existsSync(filePath) || statSync(filePath).isDirectory()) filePath = path.join(staticDirectory, 'index.html');

    if (!existsSync(filePath)) {
        response.writeHead(404, securityHeaders);
        response.end('Not found');
        return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const cacheControl = filePath.endsWith('index.html') ? 'no-cache' : 'public, max-age=31536000, immutable';
    response.writeHead(200, {
        ...securityHeaders,
        'Cache-Control': cacheControl,
        'Content-Type': mimeTypes[extension] || 'application/octet-stream',
    });

    if (request.method === 'HEAD') {
        response.end();
        return;
    }

    createReadStream(filePath).pipe(response);
};

const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);

    if (url.pathname === '/api/health') {
        sendJson(response, 200, { ok: true, mailConfigured });
        return;
    }

    if (url.pathname === '/api/contact') {
        await handleContactRequest(request, response);
        return;
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
        response.writeHead(405, { ...securityHeaders, Allow: 'GET, HEAD' });
        response.end('Method not allowed');
        return;
    }

    serveStaticFile(request, response, url.pathname);
});

server.listen(port, '0.0.0.0', () => {
    console.log(`NODAI server listening on http://localhost:${port}`);
    if (!mailConfigured) console.warn('Gmail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.');
});
