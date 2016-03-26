FROM node:5-onbuild
EXPOSE 8080

WORKDIR /usr/src/app
ENV NODE_ENV=production
RUN ./node_modules/.bin/webpack -p
RUN ./node_modules/.bin/babel ./server --out-dir ./dist/server

CMD [ "npm", "start" ]