FROM --platform=linux/amd64 node:alpine AS builder
WORKDIR /usr/src/app
COPY /*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM --platform=linux/amd64 node:alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3001
CMD [ "node", "dist/main.js" ]
