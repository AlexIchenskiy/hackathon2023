FROM openjdk:17-alpine
VOLUME /tmp

COPY ./target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]