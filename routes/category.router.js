const express = require('express');
const CategoryService = require('./../services/category.service');
const router = express.Router();
const service = new CategoryService();

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newCategory = await service.create(data);
    res.json(newCategory);
  } catch (error) {
    next(error);
  }
});

// READ
router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCategory = await service.update(id, data);
    res.json(updatedCategory);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const idDeleted = await service.delete(id);
    res.json(idDeleted);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
