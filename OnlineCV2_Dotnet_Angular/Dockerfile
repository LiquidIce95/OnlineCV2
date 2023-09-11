# Step 1: Build the angular app
FROM node:16 as build
WORKDIR /usr/src/app
COPY ./frontend/OCV2/package.json ./frontend/OCV2/package-lock.json ./
RUN npm install
COPY ./frontend/OCV2 ./
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/ocv2 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
