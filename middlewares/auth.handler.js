const config = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    throw new Error('unauthorized');
  }
}

module.exports = { checkApiKey };
