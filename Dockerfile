FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Copy source codes
COPY ./* .

# Exceute command

EXPOSE 2020
CMD [ "node", "server.js" ]
