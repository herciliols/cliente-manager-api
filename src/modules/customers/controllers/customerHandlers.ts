import { Request, Response, Router } from 'express';
import { getCustomersByPage, 
         findCustomerById, 
         updateCustomerById,
         deleteCustomersByIds } from '@modules/customers/models/customerQueries';


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
                        $ref: "#/components/schemas/CustomerReadDTO"
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


async function getCustomer(req: Request, res: Response) {
    /* #swagger.tags = ['clientes'],
       #swagger.security = [{
            "bearerAuth": []
    }] */
    const customerId = req.params.id;
  
    try {
      const result = await findCustomerById(Number(customerId));
      /* #swagger.responses[200] = {
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/CustomerReadDTO"
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


async function updateCustomer(req: Request, res: Response) {
  /*  #swagger.tags = ['clientes'] 
    #swagger.requestBody = {
          required: true,
          content: {
              "application/json": {
                  schema: {
                      $ref: "#/components/schemas/CustomerUpdateDTO"
                  }  
              }
          }
      } 
  */
    const customerId = req.params.id;
    const newData = req.body;

    try {
        const isSuccess = await updateCustomerById(customerId, newData);
        

        if (isSuccess) {
          return res.json({ message: `Cliente ID ${customerId} atualizado com sucesso` });
        } else {
          return res.status(404).json({ error: 'Cliente não encontrado' });
        }
      } catch (error) {
        return res.status(500).json({
          error: 'Internal Server Error',
          message: 'Ocorreu um erro interno no servidor.',
        });
    }
}


async function deleteCustomers(req: Request, res: Response) {
    /* #swagger.tags = ['clientes'],
       #swagger.security = [{
            "bearerAuth": []
    }] */
    const customerIds = req.params.ids;

    try {
        const isSuccess = await deleteCustomersByIds(customerIds);

        if (isSuccess) {
          return res.json({ message: `Cliente ID (${customerIds}) excluídos com sucesso` });
        } else {
          return res.status(404).json({ error: 'Há ID de clientes Cliente que não foram encontrados' });
        }
    } catch (error) {
        return res.status(500).json({
            error: 'Internal Server Error',
            message: 'Ocorreu um erro interno no servidor.'
        });
    }
}   


export { getAllCustomers,
         getCustomer,
         updateCustomer,
         deleteCustomers };