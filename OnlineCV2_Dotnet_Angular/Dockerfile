# Step 1: Build the angular app
FROM node:16 as build
WORKDIR /usr/src/app
COPY ./frontend/OCV2/package.json ./frontend/OCV2/package-lock.json ./
RUN npm install
COPY ./frontend/OCV2 ./
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/dist/ocv2 /usr/share/nginx/html

# Copy SSL certificates
COPY ./CRT/www.commodore.business.crt ./etc/nginx/ssl/
COPY ./KEY/www.commodore.business.key ./etc/nginx/ssl/

# Copy custom nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP and HTTPS ports
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
