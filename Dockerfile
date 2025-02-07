FROM node:18

ENV TZ "Europe/Helsinki"

WORKDIR /app

RUN apt update && apt install -y telnet