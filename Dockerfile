FROM node:12-alpine as builder

#COPY package.json package-lock.json ./
RUN mkdir /app-ui

WORKDIR /app-ui

COPY . .

RUN npm install /app-ui 

#RUN mv ./node_modules ./app-ui

RUN npm install -g @angular/cli

RUN ng build --prod


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app-ui/dist /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]