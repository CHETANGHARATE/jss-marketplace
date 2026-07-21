# JSS Marketplace Frontend - Production Deployment Guide

This guide details the production deployment steps for Vercel, Docker, and Nginx setups.

---

## 1. Prerequisites

- Node.js `v20+` or `v22+`
- npm `v10+`
- Backend API running at production URL (e.g., `https://api.jssmarketplace.com/api/v1`)

---

## 2. Environment Configuration

Create a `.env.production` file:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.jssmarketplace.com/api/v1
NEXT_PUBLIC_APP_NAME=JSS Marketplace
NODE_ENV=production

# Telemetry & Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=https://xxxxxx@sentry.io/xxxxxx
```

---

## 3. Production Build & Startup

```bash
# Install dependencies
npm ci

# Execute optimized Next.js build
npm run build

# Start production server
npm run start
```

---

## 4. Docker Deployment

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
```
