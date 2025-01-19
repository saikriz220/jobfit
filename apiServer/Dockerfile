

# Stage 2: Setup API server
FROM node:18
WORKDIR /usr/src/app

# Copy API server files
COPY package*.json ./
RUN npm install
COPY . .

# Copy React build files from Stage 1

# Expose port and start the API server
EXPOSE 5000
CMD ["node", "index.js"]
