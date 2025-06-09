FROM node:22

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
