#development setup
# Use the latest LTS version of Node.js
FROM node:22-alpine AS builder
# Set the working directory inside the container
WORKDIR /portifolioreact-19
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of your application files
COPY . .
# Build the React application for production
RUN npm run build
# Debugging: Ensure build folder was created
RUN ls -l /portifolioreact-19/dist
# Use a lightweight web server to serve the application
FROM nginx:stable-alpine

COPY --from=builder /portifolioreact-19/dist /usr/share/nginx/html

# Expose the port your app runs on
EXPOSE 3000

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
