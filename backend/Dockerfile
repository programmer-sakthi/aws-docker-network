# Use Eclipse Temurin JDK 20 base image
FROM eclipse-temurin:20-jdk

WORKDIR /app

# Copy jar file into container
COPY target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run app
ENTRYPOINT ["java", "-jar", "app.jar"]
