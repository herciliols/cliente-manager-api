const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/auth');
const { validateUpdateCustomerData } = require('../middlewares/customers');
const { getAllCustomers, getCustomerById, updateCustomerById } = require('../controllers/customers');

router.use(authenticateUser);

router.get('/customers/', getAllCustomers);

router.get('/customers/:id', getCustomerById);

router.put('/customers/:id', validateUpdateCustomerData, updateCustomerById);


module.exports = router;