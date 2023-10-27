FROM node:16


WORKDIR /backend


RUN npm i pg
RUN npm i express
RUN npm install


COPY . .


CMD ["node", "nodeapp.js"]