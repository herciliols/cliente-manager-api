const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/auth');
const { validateUpdateCustomerData } = require('../middlewares/customers');
const { getAllCustomers, 
        getCustomerById, 
        updateCustomerById, 
        deleteCustomersByIds } = require('../controllers/customers');

router.use(authenticateUser);

router.get('/customers/', getAllCustomers);

router.get('/customers/:id', getCustomerById);

router.put('/customers/update/:id', validateUpdateCustomerData, updateCustomerById);

router.delete('/customers/delete/:id', deleteCustomersByIds);


module.exports = router;