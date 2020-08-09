FROM node:12.16.3-alpine

WORKDIR /riinsworkspace

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
