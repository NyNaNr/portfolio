FROM node:18.12-alpine

WORKDIR /app/

COPY ./package.json ./
RUN npm install