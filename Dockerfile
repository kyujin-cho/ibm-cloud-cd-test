FROM node:13.8.0

EXPOSE 3000
WORKDIR /project
COPY package.json /project
COPY server.js /project
COPY yarn.lock /project
RUN yarn install
CMD ["node", "server.js"]