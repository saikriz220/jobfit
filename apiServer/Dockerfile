# Step 1: Use the official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy only package.json and package-lock.json first
# This ensures dependency caching for faster builds
COPY package*.json ./

# Step 4: Install Node.js dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port your application listens on
EXPOSE 5000

# Step 7: Define the default command to run your app
CMD ["npm", "start"]
