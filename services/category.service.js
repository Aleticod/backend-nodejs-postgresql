const { Product } = require('../db/models/product.model');
const { models } = require('./../libs/sequelize');

class CategoryService {
  constructor() {}

  // CREATE
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  // READ
  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (!category) {
      throw new Error('Category not found');
    }

    return category;
  }

  async find() {
    const categories = await models.Category.findAll({
      include: ['product']
    });
    return categories;
  }

  // UPDATE
  async update(id, data) {
    const category = await this.findOne(id);
    const updatedCategory = await category.update(data);
    return updatedCategory;
  }

  // DELETE
  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy(id);
    return { id };
  }
}

module.exports = CategoryService;
