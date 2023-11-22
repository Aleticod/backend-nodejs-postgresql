const { faker } = require('@faker-js/faker');
const { models } = require('./../libs/sequelize');
const { Op } = require('sequelize');

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
  async find(query) {
    const { limit, offset } = query;
    const { price } = query;
    const { price_min, price_max } = query;

    const options = {
      include: ['category'],
      where: {},
    };
    if (limit && offset) {
      options.limit = parseInt(limit, 10);
      options.offset = parseInt(offset, 10);
    }

    if (price) {
      options.where.price = price;
    }

    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }
    console.log(options);
    const products = await models.Product.findAll(options);
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
    const product = await this.findOne(id);
    await product.destroy(id);
    return { id };
  }
}

module.exports = ProductService;
