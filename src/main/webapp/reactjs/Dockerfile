# Step 1: Use an official Node.js image as the base image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Serve the app with a static file server
# Here, we are using 'serve' as an example static server.
# You could replace it with something else if needed.
RUN npm install -g serve

# Expose port 3000 (or the port your app uses)
EXPOSE 3000

# Step 8: Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
