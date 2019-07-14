
FROM ubuntu
MAINTAINER Sriram Subramanian
RUN ["mkdir", "/home/nodejstest/"]
WORKDIR /home/nodejstest/
RUN apt-get update
COPY . /home/nodejstest
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN npm install
EXPOSE 9090
RUN npm install -g pm2@latest
RUN mkdir -p /var/log/pm2
ENTRYPOINT [ "pm2", "start", "app.js", "--name", "node-server", "--log", "/var/log/pm2/pm2.log", "--watch", "--no-daemon" ]
# Start NodeJS with sample program
CMD ["nodejs", "/home/nodejstest/app.js"]

