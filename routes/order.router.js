const express = require('express');
const OrderService = require('./../services/order.service');

const router = express.Router();
const service = new OrderService();

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newOrder = await service.create(data);
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
});

// READ
router.get('/', async (req, res, next) => {
  try {
    const orders = await service.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedOrder = await service.update(id, data);
    res.json(updatedOrder);
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

// ADD ITEM
router.post('/add-item', async (req, res, next) => {
  try {
    const data = req.body;
    const newItem = await service.addItem(data);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
