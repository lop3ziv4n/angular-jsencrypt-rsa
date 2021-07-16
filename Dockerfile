# STEP 1 build static website

# Create image based on the official Node
FROM node:15.6.0-alpine as builder

# build-time variables
# prod|dev its value will be come from outside
ARG env=prod

RUN apk update && apk add --no-cache make git

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json /app/
RUN npm install @angular/cli@11.2.6
RUN cd /app && npm set progress=false && npm install

# Copy project files into the docker image
COPY .  /app

# Build with $env variable from outside
RUN cd /app && npm run build:$env

# STEP 2 build a small nginx image with static website

# Create image based on the official Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# From 'builder' copy website to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port the app runs in
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
