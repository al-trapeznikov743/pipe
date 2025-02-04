const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');

console.log('jsonServer_999: ', jsonServer);

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
      setTimeout(res, 800);
  });

  next();
});

// Эндпоинт для логина
server.post('/login', ({body: {username, password}}, res) => {
  try {
    const {users} = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    if (!users) {
      return res.status(500).json({message: e.message});
    }

    const currentUser = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (currentUser) {
      return res.json(currentUser);
    }

    return res.status(403).json({message: 'User not found'});
  } catch (e) {
    console.log(e);

    return res.status(500).json({message: e.message});
  }
});

server.get('/messages', ({query: {chatId}}, res) => {
  try {
    const {messages} = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    if (!messages) {
      return res.status(500).json({message: 'Messages not found in database'});
    }

    const filteredMessages = messages.filter((message) => message.chatId === Number(chatId));

    return res.json(filteredMessages);
  } catch (e) {
    console.log(e);

    return res.status(500).json({message: e.message});
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  // if (!req.headers.authorization) {
  //     return res.status(403).json({ message: 'AUTH ERROR' });
  // }

  next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
