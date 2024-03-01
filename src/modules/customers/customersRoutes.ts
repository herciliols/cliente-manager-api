import { Router } from 'express';
import { authenticateUser } from '@modules/login/middlewares/auth';
import { validateUpdateCustomerData } from '@modules/customers/middlewares/customers';
import { 
  getAllCustomers,
  getCustomerById
} from './controllers/customerHandlers';

const router = Router();

router.use(authenticateUser);

router.get('/customers/page/:page/pageSize/:pageSize', getAllCustomers);

router.get('/customers/:id', getCustomerById);

//router.put('/customers/update/:id', validateUpdateCustomerData, updateCustomerById);

//router.delete('/customers/delete/:id', deleteCustomersByIds);

export default router;
