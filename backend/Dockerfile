FROM openjdk:20-jdk-slim

WORKDIR /app

# Copy jar file into container
COPY backend-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Run app
ENTRYPOINT ["java", "-jar", "app.jar"]
