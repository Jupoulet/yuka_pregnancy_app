FROM node:16-alpine3.13

COPY ./package.json .
COPY ./package-lock.json .
COPY . .

# Run vs CMD
RUN npm install
RUN npm run build
CMD ["npm", "start"]

EXPOSE 3000