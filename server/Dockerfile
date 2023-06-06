FROM node:lts-buster
ENV HOME=/W-A-S
WORKDIR $HOME/server
COPY package.json package-lock.json $HOME/server/
RUN npm install
COPY . .
CMD ["npm","run" ,"dev"]