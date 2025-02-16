# Build stage: sử dụng Node.js để build ứng dụng Angular
FROM node:18 as build-stage

WORKDIR /app

# Copy package.json và package-lock.json để cài đặt dependencies
COPY package*.json ./

RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng Angular
RUN npm run build --prod

# Nginx stage: sử dụng Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép cấu hình nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Sao chép các tệp build từ build stage vào thư mục html của Nginx
COPY --from=build-stage /app/dist/book-network-ui/browser /usr/share/nginx/html

EXPOSE 80
