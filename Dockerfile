# Use a minimal base image with node and alpine
FROM node:current-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Install serve to serve the build folder
RUN npm install -g serve

# Copy build artifacts from the pipeline
COPY out /usr/src/app/out

# Expose the port on which your app runs
EXPOSE 3000

# Serve the build folder
CMD ["serve", "-s", "out", "-l", "3001", "-n"]
