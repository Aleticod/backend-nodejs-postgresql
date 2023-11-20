const { models } = require('./../libs/sequelize');

class CustomerService {
  constructor() {}

  // CREATE
  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  // READ
  async find() {
    const customers = await models.Customer.findAll();
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
    await customer.delete();
    return { id };
  }
}

module.exports = CustomerService;
