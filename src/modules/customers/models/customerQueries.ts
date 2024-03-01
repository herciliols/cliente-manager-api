import { pool } from '../../../config/database';


async function getCustomersByPage(page: number, pageSize: number) {
  const offset = (page - 1) * pageSize; 
  const [listCustomers] = await pool.query("SELECT id, nome, sobrenome, sexo, data_nascimento FROM clientes ORDER BY id LIMIT ? OFFSET ?", [pageSize, offset]);
  
  return listCustomers; 
}


async function findCustomerById(customerId: number) {
  const [customerData] = await pool.query('SELECT * FROM clientes WHERE id = ?', [customerId]);
  
  return customerData;
}



export { getCustomersByPage, findCustomerById };
