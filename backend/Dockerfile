# Используем легковесный образ с Node.js 18
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Компилируем TypeScript
RUN npm run build

# Открываем порт 5000
EXPOSE 5000

# Запускаем приложение в production-режиме
CMD ["npm", "run", "start:prod"]