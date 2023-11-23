const jwt = require('jsonwebtoken');

const secret = 'myCat'; // Esto deberia estar en una variable de entorno

const payload = {
  sub: 1, // Identificador del token
  role: 'customer',
};

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);
