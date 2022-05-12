FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

# COPY package-lock.json ./

COPY lock.json ./

RUN yarn install

COPY . ./

EXPOSE 3000

CMD [ "npm","run", "start" ]