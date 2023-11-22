const express = require('express');
const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newProduct = await service.create(data);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
});

// READ
router.get('/', async (req, res, next) => {
  try {
    const products = await service.find(req.query);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedProduct = await service.update(id, data);
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedId = await service.delete(id);
    res.json(deletedId);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
