#docker file to build the angular frontend application
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/hw3 /usr/share/nginx/html
