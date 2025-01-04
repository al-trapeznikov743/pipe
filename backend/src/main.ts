// import {development} from '../config';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

const start = async() => {

  // process.env.DATABASE_URL = development.connect;

  // console.log('development: ', development);

  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://pipe.local', // Разрешаем запросы с фронтенд-сервиса
    methods: 'GET,POST,PUT,DELETE', // Разрешаем методы
    allowedHeaders: 'Content-Type,Authorization', // Разрешаем заголовки
    credentials: true, // Разрешаем отправку cookies и других учетных данных
  });

  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
};

start();