FROM node

WORKDIR /space-page

COPY package.json ./
COPY package-lock.json ./

COPY ./ ./

RUN npm install

CMD ["npm", "run", "start"]
