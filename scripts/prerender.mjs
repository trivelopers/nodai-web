import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const origin = 'https://nodai.app';
const pages = [
    { language: 'es', pathname: '/', title: 'NodAI | Desarrollo de software e inteligencia artificial', description: 'Desarrollamos software a medida, soluciones de inteligencia artificial y automatizaciones para tu negocio. Conocé NodAI y contanos tu proyecto.', locale: 'es_AR' },
    { language: 'en', pathname: '/en/', title: 'NodAI | Custom software development and artificial intelligence', description: 'We develop custom software, artificial intelligence solutions and process automation for your business. Meet NodAI and tell us about your project.', locale: 'en_US' },
];
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const temporaryDirectory = path.resolve('.prerender');

try {
    await build({
        configFile: false,
        plugins: [react()],
        build: { ssr: 'entry-server.tsx', outDir: temporaryDirectory, emptyOutDir: true, copyPublicDir: false },
    });
    const { render } = await import(pathToFileURL(path.join(temporaryDirectory, 'entry-server.js')).href);
    const template = await readFile('dist/index.html', 'utf8');
    for (const page of pages) {
        const url = `${origin}${page.pathname}`;
        const structuredData = {
            '@context': 'https://schema.org',
            '@graph': [
                { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'NodAI', url: `${origin}/`, logo: `${origin}/images/nodai-negro.png` },
                { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'NodAI', alternateName: 'NODAI', url: `${origin}/`, inLanguage: ['es', 'en'], publisher: { '@id': `${origin}/#organization` } },
                { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: page.language, isPartOf: { '@id': `${origin}/#website` }, about: { '@id': `${origin}/#organization` } },
            ],
        };
        const seo = [
            `<meta name="description" content="${escape(page.description)}" />`,
            `<link rel="canonical" href="${url}" />`,
            ...pages.map((alternate) => `<link rel="alternate" hreflang="${alternate.language}" href="${origin}${alternate.pathname}" />`),
            `<link rel="alternate" hreflang="x-default" href="${origin}/" />`,
            '<meta property="og:type" content="website" />',
            '<meta property="og:site_name" content="NodAI" />',
            `<meta property="og:title" content="${escape(page.title)}" />`,
            `<meta property="og:description" content="${escape(page.description)}" />`,
            `<meta property="og:url" content="${url}" />`,
            `<meta property="og:locale" content="${page.locale}" />`,
            '<meta name="twitter:card" content="summary" />',
            `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`,
        ].join('\n    ');
        const html = template
            .replace('<html lang="es">', `<html lang="${page.language}">`)
            .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
            .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, seo)
            .replace('<div id="root"></div>', () => `<div id="root">${render(page.language)}</div>`);
        const directory = path.join('dist', page.pathname);
        await mkdir(directory, { recursive: true });
        await writeFile(path.join(directory, 'index.html'), html);
        console.log(`Prerendered ${page.pathname} (${page.language})`);
    }
} finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
}
