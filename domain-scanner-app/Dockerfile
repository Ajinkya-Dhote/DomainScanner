# Use a minimal base image for production
FROM maven:3.9.0-amazoncorretto-17 as builder

WORKDIR /app



# Copy the project files
COPY pom.xml .
COPY src src

# Build the Spring Boot JAR
RUN mvn clean package -DskipTests



FROM alpine:3.18.0

RUN apk update && apk add openjdk17 nmap

# Copy the Spring Boot JAR from the builder stage
COPY --from=builder /app/target/scanner-0.0.1-SNAPSHOT.jar /app/scanner-0.0.1-SNAPSHOT.jar

WORKDIR /app

ENTRYPOINT ["java","-jar","/app/scanner-0.0.1-SNAPSHOT.jar"]