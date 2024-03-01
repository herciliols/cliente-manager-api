import { Request, Response, Router } from 'express';
import { getCustomersByPage, findCustomerById } from '../models/customerQueries';

interface CustomerData {
    id: number;
    nome: string;
    sobrenome: string;
    sexo: string;
    data_nascimento: string;
}

async function getAllCustomers(req: Request, res: Response) {

    /* #swagger.tags = ['clientes'],
       #swagger.security = [{
            "bearerAuth": []
    }] */


    const { page, pageSize } = req.params;
    
    try {
      const result = await getCustomersByPage(Number(page), Number(pageSize));
      /* #swagger.responses[200] = {
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/CustomersGetResponseSuccess"
                    }
                }           
            }
        }   
      */
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        error: 'Internal Server Error',
        message: 'Ocorreu um erro interno no servidor.',
      });
    }
}

async function getCustomerById(req: Request, res: Response) {
    /* #swagger.tags = ['clientes'],
       #swagger.security = [{
            "bearerAuth": []
    }] */
    const customerId = req.params.id;
  
    try {
      const result = await findCustomerById(Number(customerId));
      return res.status(200).json(result);


    } catch (error) {
      return res.status(500).json({
            error: 'Internal Server Error',
            message: 'Ocorreu um erro interno no servidor.',
      });
    }
}



// async function updateCustomerById(req: Request<{ id: number }>, res: Response) {
//     /* 
//     #swagger.tags = ['clientes'],
//     #swagger.security = [{
//                 "BearerAuth": []
//     }] 
//     */
//     const customerId: number = req.params.id;
//     const newData: Partial<CustomerData> = req.body;

//     try {
//         const updateColumns = Object.keys(newData).map(column => `${column} = ?`).join(', ');
//         const values = [...Object.values(newData), customerId];
//         const result = await query(`UPDATE clientes SET ${updateColumns} WHERE id = ?`, values);
    
//         if (result && 'affectedRows' in result && result.affectedRows > 0) {
//           res.json({ message: `Cliente com ID ${customerId} atualizado com sucesso` });
//         } else {
//           res.status(404).json({ error: 'Cliente não encontrado' });
//         }

//       } catch (error) {
//         res.status(500).json({
//           error: 'Internal Server Error',
//           message: 'Ocorreu um erro interno no servidor.',
//         });
//     }
// }

// async function deleteCustomersByIds(req: Request, res: Response) {
//     /* 
//     #swagger.tags = ['clientes'],
//     #swagger.security = [{
//                 "BearerAuth": []
//     }] 
//     */
//     const customerIds: string = req.params.id;

//     if (!customerIds || typeof customerIds !== 'string') {
//         return res.status(400).json({ error: 'Parâmetro de IDs de clientes inválido' });
//     }

//     const customerIdsArray: number[] = customerIds.split(',').map(id => parseInt(id.trim(), 10));

//     if (customerIdsArray.length === 0) {
//         return res.status(400).json({ error: 'Array de IDs de clientes inválido ou vazio' });
//     }

//     try {
//         const placeholders: string = customerIdsArray.map(() => '?').join(', ');
//         const result = await query(`DELETE FROM clientes WHERE id IN (${placeholders})`, customerIdsArray);

//         if (result.affectedRows > 0) {
//             res.json({ message: `Clientes com IDs [${customerIdsArray.join(', ')}] excluídos com sucesso` });
//         } else {
//             res.status(404).json({ error: 'Nenhum cliente encontrado para exclusão' });
//         }
//     } catch (error) {
//         res.status(500).json({
//             error: 'Internal Server Error',
//             message: 'Ocorreu um erro interno no servidor.'
//         });
//     }
// }   


export { getAllCustomers,
         getCustomerById };