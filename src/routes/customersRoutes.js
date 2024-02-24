const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/authMiddleware');
const { validateUpdateCustomerData } = require('../middlewares/customersMiddleware');
const { getAllCustomers, getCustomerById, updateCustomerById } = require('../controllers/customersController');

router.use(authenticateUser);

router.get('/', getAllCustomers);

router.get('/:id', getCustomerById);

router.put('/:id', validateUpdateCustomerData, updateCustomerById);


module.exports = router;