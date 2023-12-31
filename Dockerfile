# Base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and tsconfig.json
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the API port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
