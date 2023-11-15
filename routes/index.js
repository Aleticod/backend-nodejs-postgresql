const express = require('express');
const routerProducts = require('./products.router.js');
const routerUsers = require('./users.router.js');

function routerAPI(server) {
  const router = express.Router();
  router.use('/products', routerProducts);
  router.use('/users', routerUsers);
  server.use('/api/v1', router);
}

module.exports = routerAPI;
