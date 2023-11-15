const getConnection = require('./../libs/postgres.js');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM tasks');
    return rta.rows;
  }
}

module.exports = UserService;
