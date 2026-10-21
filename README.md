<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# NodAI - AI Business Solutions

## SEO e idiomas

`npm run build` genera HTML completo y metadatos por idioma: español en `/` e inglés
en `/en/`. La URL determina el idioma; las preferencias anteriores y el idioma del
navegador no cambian el contenido. El selector enlaza ambas versiones y conserva
la sección activa. El build incluye canonical, hreflang, Open Graph, datos
estructurados de Organization/WebSite/WebPage, `robots.txt` y `sitemap.xml`.

El dominio canónico es `https://nodai.app`. Si cambia, actualizar también
`scripts/prerender.mjs`, `index.html`, `public/robots.txt` y `public/sitemap.xml`.

Para terminar la configuración de Google Search Console:

1. Publicar el build en el proyecto que sirve `https://nodai.app/`.
2. Abrir la propiedad de prefijo de URL `https://nodai.app/` y verificar con el
   método **Etiqueta HTML**. La etiqueta entregada por Google ya está incorporada
   en `index.html`; conservarla en los próximos despliegues.
3. En **Sitemaps**, enviar `https://nodai.app/sitemap.xml`.
4. En **Inspección de URLs**, comprobar `/` y `/en/` con la prueba en vivo y
   solicitar la indexación.
5. En **Rendimiento**, filtrar la consulta `nodai` para medir impresiones,
   clics y posición cuando Google disponga de datos.

La configuración local no confirma que Google haya verificado o indexado el sitio.

This contains everything you need to run your app locally or deploy it with Docker and Traefik.

View your app in AI Studio: https://ai.studio/apps/drive/1pXA4C2vbFQG8T9UwngM75mFmi1BoCFH7

## 🚀 Quick Start with Docker (Recommended)

**Prerequisites:** Docker and Docker Compose

1. Clone the repository
2. Set your environment variables. For Gmail, enable two-step verification and
   create an app password; never use your normal Google password:
   ```bash
   export GEMINI_API_KEY=your_api_key_here
   export GMAIL_USER=trivelopers@gmail.com
   export GMAIL_APP_PASSWORD=your_16_character_app_password
   export CONTACT_TO=trivelopers@gmail.com
   ```
3. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

Your app will be available at:
- **Production**: https://nodai.app
- **Traefik Dashboard**: https://traefik.nodai.app

## 🛠️ Development Setup

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and complete the values. Gmail requires
   a 16-character app password created from your Google Account security page:
   ```bash
   cp .env.example .env.local
   GEMINI_API_KEY=your_api_key_here
   GMAIL_USER=trivelopers@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   CONTACT_TO=trivelopers@gmail.com
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🐳 Docker Commands

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f nodai-web
docker-compose logs -f traefik

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```
