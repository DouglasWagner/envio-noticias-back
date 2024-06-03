FROM node:alpine

WORKDIR /app
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh", "npm", "run", "dev"]
