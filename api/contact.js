import nodemailer from 'nodemailer';

const maxBodySize = 24 * 1024;
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 5;
const requestLog = new Map();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value, maxLength) => typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const sendJson = (response, statusCode, payload) => {
    response.status(statusCode).setHeader('Cache-Control', 'no-store').json(payload);
};

const getClientAddress = (request) => {
    const forwarded = request.headers['x-forwarded-for'];
    return typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : request.socket?.remoteAddress || 'unknown';
};

const isRateLimited = (address) => {
    const now = Date.now();
    const requests = (requestLog.get(address) || []).filter((timestamp) => now - timestamp < rateLimitWindowMs);
    requests.push(now);
    requestLog.set(address, requests);
    return requests.length > rateLimitMaxRequests;
};

const parseBody = (request) => {
    if (Buffer.byteLength(JSON.stringify(request.body || {})) > maxBodySize) throw new Error('payload_too_large');
    if (typeof request.body === 'string') return JSON.parse(request.body || '{}');
    return request.body || {};
};

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        sendJson(response, 405, { ok: false });
        return;
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
    const contactRecipient = process.env.CONTACT_TO?.trim() || gmailUser;

    if (!gmailUser || !gmailAppPassword || !contactRecipient) {
        sendJson(response, 503, { ok: false, code: 'mail_not_configured' });
        return;
    }

    if (isRateLimited(getClientAddress(request))) {
        sendJson(response, 429, { ok: false, code: 'rate_limited' });
        return;
    }

    try {
        const body = parseBody(request);
        const name = cleanText(body.name, 120);
        const email = cleanText(body.email, 254).toLowerCase();
        const dialCode = cleanText(body.dialCode, 8);
        const phone = cleanText(body.phone, 40);
        const company = cleanText(body.company, 160);
        const message = cleanText(body.message, 5000);
        const website = cleanText(body.website, 200);

        if (website) return sendJson(response, 200, { ok: true });
        if (!name || !emailPattern.test(email) || !message) return sendJson(response, 400, { ok: false, code: 'invalid_fields' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: gmailUser, pass: gmailAppPassword },
        });
        const subjectName = name.replace(/[\r\n]+/g, ' ');
        const subjectCompany = company.replace(/[\r\n]+/g, ' ');
        await transporter.sendMail({
            from: `NODAI Web <${gmailUser}>`,
            to: contactRecipient,
            replyTo: { name, address: email },
            subject: `Consulta web de ${subjectName}${subjectCompany ? ` - ${subjectCompany}` : ''}`,
            text: [`Nombre: ${name}`, `Email: ${email}`, `Teléfono: ${phone ? `${dialCode} ${phone}`.trim() : 'No informado'}`, `Empresa: ${company || 'No informada'}`, '', 'Mensaje:', message].join('\n'),
        });
        sendJson(response, 201, { ok: true });
    } catch (error) {
        console.error('Contact email failed:', error instanceof Error ? error.message : error);
        sendJson(response, 500, { ok: false, code: 'send_failed' });
    }
}
