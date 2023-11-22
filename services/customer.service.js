const { models } = require('./../libs/sequelize');

class CustomerService {
  constructor() {}

  // CREATE
  async create(data) {
    // const newUser = await models.User.create(data.user);
    // const newCustomer = await models.Customer.create({
    //   ...data,
    //   userId: newUser.id,
    // });
    const newCustomer = await models.Customer.create(data, {
      include: ['user'],
    });
    return newCustomer;
  }

  // READ
  async find() {
    const customers = await models.Customer.findAll({
      include: ['user' /**'order'**/],
    });
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw new Error('Customer no found');
    }
    return customer;
  }

  // UPDATE
  async update(id, data) {
    const customer = await this.findOne(id);
    const updatedCustomer = customer.update(data);
    return updatedCustomer;
  }

  // DELETE
  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
