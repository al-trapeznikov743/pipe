# Базовый образ для сборки
FROM node:18 as build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json .
RUN npm install

# Копируем исходный код и создаем сборку
COPY . .
RUN npm run prod

# Базовый образ для сервера
FROM nginx:alpine

# Копируем собранные файлы React на сервер
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]