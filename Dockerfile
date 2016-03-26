FROM node:5.9.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

RUN NODE_ENV=production ./node_modules/.bin/webpack -p
RUN NODE_ENV=production ./node_modules/.bin/babel ./server --out-dir ./dist/server

CMD [ "npm", "start" ]