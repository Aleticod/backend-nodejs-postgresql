// const getConnection = require('./../libs/postgres.js');
// const pool = require('../libs/postgres.pool.js');
const sequelize = require('../libs/sequelize.js');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => {
    //   console.error(err);
    // });
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
    // const rta = await this.pool.query('SELECT * FROM task');
    // return rta.rows;
    const [data] = await sequelize.query('SELECT * FROM task');
    return data;
  }
}

module.exports = UserService;
