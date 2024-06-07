FROM node:18-alpine

WORKDIR /msglite_webapp/

COPY public/ /msglite_webapp/public
COPY src/ /msglite_webapp/src
COPY package.json /msglite_webapp/package.json

RUN npm install

CMD ["npm", "start"]