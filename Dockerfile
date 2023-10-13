
FROM --platform=linux/amd64 node:18.18-slim AS development
WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
RUN npm rebuild typescript
RUN npm run build
LABEL org.opencontainers.image.source=https://github.com/kenantelyakar/DMC-Backend-Typescript
EXPOSE 3001
CMD ["npm", "start"]