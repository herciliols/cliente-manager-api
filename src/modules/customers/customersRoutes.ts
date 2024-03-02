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

router.get('/customers/page/:page/pageSize/:pageSize', getAllCustomers);

router.get('/customers/:id', getCustomer);

router.put('/customers/update/:id', validateUpdateCustomerData, updateCustomer);

router.delete('/customers/delete/:ids', deleteCustomers);

export default router;
