#Build
FROM node:20-alpine as builder

WORKDIR /usr/src/app

RUN npm i --global --force yarn

COPY --chown=node:node . .

RUN yarn install && yarn build

#Production
FROM node:20-alpine as production

WORKDIR /usr/src/app

RUN npm i --global --force yarn

COPY --chown=node:node package.json yarn.lock ./

COPY --from=builder --chown=node:node /usr/src/app/client/dist ./client/dist

COPY --from=builder --chown=node:node /usr/src/app/server/dist ./server/dist

COPY --chown=node:node client/package.json ./client

COPY --chown=node:node server/package.json ./server

ENV NODE_ENV production

RUN yarn install --production && yarn cache clean

USER node

CMD [ "node", "./server/dist" ]
