FROM alpine:latest AS builder

WORKDIR /app

COPY . .


RUN chmod -R 755 /app

# Stage 2: Production Server

FROM nginx:alpine

# Copy ONLY the necessary files from builder
COPY --from=builder /app /usr/share/nginx/html

# Remove default nginx page
RUN rm /usr/share/nginx/html/index.html 2>/dev/null || true

# Expose HTTP port
EXPOSE 80

# Health check to ensure nginx is serving
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

