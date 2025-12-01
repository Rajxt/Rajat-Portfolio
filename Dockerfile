# Stage 1: Preparation
FROM alpine:latest AS builder

WORKDIR /app

# Copy all your website files
COPY . .

# Remove unnecessary files (keep HTML/CSS/JS/assets)
RUN rm -rf .git .gitignore README.md Dockerfile Jenkinsfile .dockerignore 2>/dev/null || true

# ==========================================
# Stage 2: Production Server
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files from builder
COPY --from=builder /app /usr/share/nginx/html

# Make sure nginx can read the files
RUN chmod -R 755 /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]