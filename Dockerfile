FROM node:16

ARG MYSQL_USER=root
ARG MYSQL_PASSWORD=1234578910
ARG MYSQL_DATABASE=u331719236_clientesdb
ARG MYSQL_ROOT_PASSWORD=root_password

RUN apt-get update && \
    DEBIAN_FRONTEND="noninteractive" apt-get install -y mariadb-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000

CMD ["sh", "-c", "service mysql start && npm run start"]
