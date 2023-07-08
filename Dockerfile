#Client
FROM node:20-alpine as build-client

WORKDIR /usr/src/app

RUN npm i --global --force yarn

COPY --chown=node:node yarn.lock .

COPY --chown=node:node client/package.json .

COPY --chown=node:node client/ .

RUN yarn install

RUN yarn build

USER node

#Server
FROM node:20-alpine as build-server

WORKDIR /usr/src/app

RUN npm i --global --force yarn

COPY --chown=node:node yarn.lock .

COPY --chown=node:node server/package.json .

COPY --chown=node:node server/ .

RUN yarn install

USER node

#Production
FROM node:20-alpine as production

WORKDIR /usr/src/app

ENV NODE_ENV production

RUN npm i --global --force yarn

COPY --from=build-client --chown=node:node /usr/src/app ./client

COPY --from=build-server --chown=node:node /usr/src/app ./server

COPY --chown=node:node package.json .

COPY --chown=node:node yarn.lock .

COPY --chown=node:node server/package.json ./server

COPY --chown=node:node client/package.json ./client

RUN yarn install --production && yarn cache clean

CMD [ "yarn", "start" ]
