### STAGE 1: Build ###
FROM node:latest AS node
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
# RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /usr/src/app/dist/teamapp /usr/share/nginx/html