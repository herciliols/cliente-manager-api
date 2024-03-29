import { pool } from '@config/database';
import { ResultSetHeader, RowDataPacket  } from 'mysql2';

interface CustomerData {
  id?: number;
  nome?: string;
  sobrenome?: string;
  sexo?: string;
  data_nascimento?: string;
}

async function getCustomersByPage(page: number, pageSize: number): Promise<RowDataPacket[]> {
  const offset = (page - 1) * pageSize; 
  const selectQuery = `SELECT 
                        JSON_ARRAYAGG(
                          JSON_OBJECT(
                            'id', id,
                            'nome', nome,
                            'sobrenome', sobrenome,
                            'endereco', JSON_OBJECT('rua', rua, 'cidade', cidade, 'estado', estado, 'CEP', cep)
                          )
                            ) AS customers
                            FROM clientes
                            ORDER BY id
                            LIMIT ? OFFSET ?;`;
  const [jsonCustomers] = await pool.query(selectQuery, [pageSize, offset]);
  const listCustomers = JSON.parse((Object.values(jsonCustomers)[0].customers));
  return listCustomers as RowDataPacket[]; 
}

async function findCustomerById(customerId: number): Promise<RowDataPacket[]> {
  const [customerData] = await pool.query('SELECT * FROM clientes WHERE id = ?', [customerId]);
  
  return customerData as RowDataPacket[];
}

async function updateCustomerById(customerId: string, newData: CustomerData): Promise<boolean> {
  const { nome, sobrenome, sexo, data_nascimento } = newData;

  const updateQuery = `
    UPDATE clientes
    SET nome = ?, sobrenome = ?, sexo = ?, data_nascimento = ?
    WHERE id = ?`;

  const [result] = await pool.query(updateQuery, [nome, sobrenome, sexo, data_nascimento, customerId]);

  const { affectedRows } = result as ResultSetHeader;

  return !!affectedRows;
}

async function deleteCustomersByIds(customerIds: string): Promise<boolean> {
  const deleteQuery = `
    DELETE FROM clientes
    WHERE id IN (?)`;

  const [result] = await pool.query(deleteQuery, [customerIds]);
  
  const { affectedRows } = result as ResultSetHeader;
  return !!affectedRows;
}





export { getCustomersByPage, 
         findCustomerById,
         updateCustomerById,
         deleteCustomersByIds };
