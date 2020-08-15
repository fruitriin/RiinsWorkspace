FROM node:12.18.3-alpine

WORKDIR /riinsworkspace

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
