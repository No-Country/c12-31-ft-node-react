#Development
FROM node:20-alpine as development

WORKDIR /usr/src/app

COPY --chown=node:node server/package.json ./

COPY --chown=node:node package-lock.json ./

RUN npm i

COPY --chown=node:node . .

USER node

#Build
FROM node:20-alpine as build

WORKDIR /usr/src/app

COPY --chown=node:node server/package.json ./

COPY --chown=node:node package-lock.json ./

# NOTE: 'npm ci' its better but npm complains about package-lock.json
RUN npm i
# COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

ENV NODE_ENV production

RUN npm run build --workspace server

USER node

#Production
FROM node:20-alpine as production

WORKDIR /usr/src/app

ENV TS_NODE_BASEURL ./dist

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/server/dist ./dist

CMD [ "node", "./dist/app.js" ]
