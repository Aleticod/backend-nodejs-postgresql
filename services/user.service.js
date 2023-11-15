const getConnection = require('./../libs/postgres.js');
const pool = require('../libs/postgres.pool.js');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.error(err);
    });
  }

  async create(data) {
    return data;
  }

  // async find() {
  //   const client = await getConnection();
  //   const rta = await client.query('SELECT * FROM tasks');
  //   return rta.rows;
  // }

  async find() {
    const rta = await this.pool.query('SELECT * FROM tasks');
    return rta.rows;
  }
}

module.exports = UserService;
