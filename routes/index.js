const express = require('express');
const routerProducts = require('./products.router.js');

function routerAPI(server) {
  const router = express.Router();
  router.use('/products', routerProducts);
  server.use('/api/v1', router);
}

module.exports = routerAPI;
