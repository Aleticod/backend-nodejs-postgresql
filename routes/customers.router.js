const express = require('express');

const CustomerService = require('../services/customer.service');

const router = express.Router();

const service = new CustomerService();

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newCustomer = await service.create(data);
    res.json(newCustomer);
  } catch (error) {
    next(error);
  }
});

// READ
router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCustomer = await service.update(id, data);
    res.json(updatedCustomer);
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
