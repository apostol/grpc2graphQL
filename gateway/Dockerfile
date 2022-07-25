FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install typescript ts-node -g && npm install
COPY . .
EXPOSE 4000
CMD [ "ts-node", "src/index.ts" ]