const express = require('express');
const routerAPI = require('./routes/index');
const { ormErrorHandler } = require('./middlewares/error.handler');
const { checkApiKey } = require('./middlewares/auth.handler');
const passport = require('passport');

// Variables and constans
const port = process.env.PORT || 3000;

// Create a express server
const server = express();

// Recieve data from post req in json form
server.use(express.json());

// CORS

// AUTH
server.use(passport.initialize());
require('./utils/auth');

// Routers
server.get('/nueva-ruta', checkApiKey, (req, res, next) => {
  res.send('Hola, soy una nueva ruta');
});
routerAPI(server);

// General middlewares
server.use(ormErrorHandler);

// Listening server
server.listen(port, () => {
  console.log('Mi port es ' + port);
});
