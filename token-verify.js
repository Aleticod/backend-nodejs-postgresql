const jwt = require('jsonwebtoken');

const secret = 'myCat'; // Esto deberia estar en una variable de entorno

const token = 'asdfljasldfjlasdjflajsdfljalsdfjlasjdfljasdlfjlasjdfla';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
