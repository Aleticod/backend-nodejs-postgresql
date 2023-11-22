const { models } = require('./../libs/sequelize');

class OrderService {
  constructor() {}

  // CREATE
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  // READ
  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [{
        association: 'customer',
        include: ['user']
      },
      'items'
    ]
    });
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  }

  // UPDATE
  async update(id, data) {
    const order = await this.findOne(id);
    const updatedOrder = await order.update(data);
    return updatedOrder;
  }

  // DELETE
  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return { id };
  }

  // ADD ITEM
  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }
}

module.exports = OrderService;
