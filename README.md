<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# NODAI - Business Solutions

This contains everything you need to run your app locally or deploy it with Docker and Traefik.

View your app in AI Studio: https://ai.studio/apps/drive/1pXA4C2vbFQG8T9UwngM75mFmi1BoCFH7

## 🚀 Quick Start with Docker (Recommended)

**Prerequisites:** Docker and Docker Compose

1. Clone the repository
2. Set your environment variables:
   ```bash
   export GEMINI_API_KEY=your_api_key_here
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
2. Create `.env.local` file with your API key:
   ```bash
   GEMINI_API_KEY=your_api_key_here
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
