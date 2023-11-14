const express = require('express');
const routerAPI = require('./routes/index');

// Variables and constans
const port = process.env.PORT || 3000;

// Create a express server
const server = express();

// Recieve data from post req in json form
server.use(express.json());

// CORS

// Routers
routerAPI(server);

// General middlewares

// Listening server
server.listen(port, () => {
  console.log('Mi port es ' + port);
});
