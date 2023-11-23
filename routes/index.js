const express = require('express');
const routerProducts = require('./products.router.js');
const routerUsers = require('./users.router.js');
const routerCustomer = require('./customers.router.js');
const routerCategory = require('./category.router.js');
const routerOrder = require('./order.router.js');
const routerAuth = require('./auth.router.js');

function routerAPI(server) {
  const router = express.Router();
  router.use('/auth', routerAuth);
  router.use('/products', routerProducts);
  router.use('/users', routerUsers);
  router.use('/customers', routerCustomer);
  router.use('/categories', routerCategory);
  router.use('/orders', routerOrder);
  server.use('/api/v1', router);
}

module.exports = routerAPI;
