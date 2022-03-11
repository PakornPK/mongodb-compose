FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME dev
ENV MONGO_INITDB_ROOT_PASSWORD projectx
ENV MONGO_INITDB_DATABASE DB_PX

ADD ./mongo-init.js /docker-entrypoint-initdb.d