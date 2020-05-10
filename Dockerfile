FROM ubuntu:18.04

ENV LANG="ja_JP.UTF-8"
ENV LANGUAGE="ja_JP.UTF-8"
ENV JAVA_VERSION="13.0.2"
EXPOSE 8080

# initialize
RUN apt update -y
RUN apt upgrade -y
RUN apt install wget -y
RUN apt install tar -y

# install openjdk
RUN wget https://download.java.net/java/GA/jdk${JAVA_VERSION}/d4173c853231432d94f001e99d882ca7/8/GPL/openjdk-${JAVA_VERSION}_linux-x64_bin.tar.gz
RUN tar xvf openjdk-${JAVA_VERSION}_linux-x64_bin.tar.gz
RUN mv jdk-${JAVA_VERSION} /usr/local/lib
ENV JAVA_HOME=/usr/local/lib/jdk-${JAVA_VERSION}
ENV PATH=${JAVA_HOME}/bin:${PATH}

COPY ./server/build/libs/web-0.0.1-SNAPSHOT.jar /home/server.jar
ENTRYPOINT ["java", "-jar", "/home/server.jar"]