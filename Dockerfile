FROM node:18.18-slim AS development
WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
RUN npm rebuild typescript
RUN npm run build

EXPOSE 3001
CMD ["npm", "start"]