FROM node:lts-buster
ENV HOME=/W-A-S
WORKDIR $HOME/admin
COPY package.json package-lock.json $HOME/admin/
# RUN chown -R node:node $HOME/admin/node_modules
RUN npm install
COPY . .
CMD ["npm",  "start"]


