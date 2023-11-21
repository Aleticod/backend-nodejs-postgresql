const express = require('express');
const routerProducts = require('./products.router.js');
const routerUsers = require('./users.router.js');
const routerCustomer = require('./customers.router.js');
const routerCategory = require('./category.router.js');

function routerAPI(server) {
  const router = express.Router();
  router.use('/products', routerProducts);
  router.use('/users', routerUsers);
  router.use('/customers', routerCustomer);
  router.use('/categories', routerCategory);
  server.use('/api/v1', router);
}

module.exports = routerAPI;
