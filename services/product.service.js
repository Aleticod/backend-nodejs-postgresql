const { faker } = require('@faker-js/faker');
const { models } = require('./../libs/sequelize');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  // CREATE
  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  // READ
  async find() {
    const products = await models.Product.findAll({
      include: ['category']
    });
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw new Error('Product no found');
    }

    return product;
  }

  // UPDATE
  async update(id, data) {
    const product = await this.findOne(id);
    const updatedProduct = await product.update(data);
    return updatedProduct;
  }

  // DELETE
  async delete(id) {
    const product = await this.findOne(id)
    await product.destroy(id)
    return {id}
  }
}

module.exports = ProductService;
