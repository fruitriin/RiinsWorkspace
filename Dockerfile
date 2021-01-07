FROM node:12.20.1-alpine

WORKDIR /riinsworkspace

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
