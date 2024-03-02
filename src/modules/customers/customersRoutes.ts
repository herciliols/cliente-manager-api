import { Router } from 'express';
import { authenticateUser } from '@modules/login/middlewares/auth';
import { validateUpdateCustomerData } from '@modules/customers/middlewares/customers';
import { 
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomers
} from './controllers/customerHandlers';

const router = Router();

router.use(authenticateUser);

router.get('/customers/', getAllCustomers);

router.get('/customers/:id', getCustomer);

router.put('/customers/:id', validateUpdateCustomerData, updateCustomer);

router.delete('/customers/:ids', deleteCustomers);

export default router;
