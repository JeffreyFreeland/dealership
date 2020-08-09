FROM node:12 AS builder

RUN [ "npm", "install", "-g", "@angular/cli" ]

WORKDIR /usr/src/app

COPY package*.json ./

RUN [ "npm", "install" ]

COPY . .

RUN [ "ng",  "build", "--prod" ]

FROM nginx:1.15.8-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/dealership /usr/share/nginx/html
