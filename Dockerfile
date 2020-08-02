FROM node:12 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN [ "npm", "install" ]

COPY . .

CMD [ "npm", "build", "--prod" ]

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/dealership /usr/share/nginx/html
