FROM node:10
WORKDIR /feature-bottom-bar
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4242

CMD ["npm", "start"]