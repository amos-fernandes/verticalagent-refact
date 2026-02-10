# Estágio 1: Build
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servir com Nginx
FROM nginx:alpine
# Copia o build do Vite (que vai para a pasta dist) para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Configura a porta que o Cloud Run espera
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
