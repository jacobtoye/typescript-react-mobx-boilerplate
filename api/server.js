const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  sleep(1000).then(() => {
    next();
  });
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});