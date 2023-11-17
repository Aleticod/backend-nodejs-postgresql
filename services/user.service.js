// const getConnection = require('./../libs/postgres.js');
// const pool = require('../libs/postgres.pool.js');
// const sequelize = require('../libs/sequelize.js');
const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => {
    //   console.error(err);
    // });
  }

  // CREATE
  async create(data) {
    // User ORM to create new user with sequelize
    const newUser = models.User.create(data);
    return newUser;
  }

  // async find() {
  //   const client = await getConnection();
  //   const rta = await client.query('SELECT * FROM tasks');
  //   return rta.rows;
  // }

  // READ
  async find() {
    // const rta = await this.pool.query('SELECT * FROM task');
    // return rta.rows;
    // const [data] = await sequelize.query('SELECT * FROM task');
    // return data;
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      // throw boom.notFound('User not found')
      throw new Error('User not found');
    }
    return user;
  }

  // UPDATE
  async update(id, data) {
    const user = await this.findOne(id);
    const updatedUser = await user.update(data);
    return updatedUser;
  }

  // DELETE
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
