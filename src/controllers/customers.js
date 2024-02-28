const { query } = require('../models/database');

const getAllCustomers = async (req, res) => {
    /* #swagger.tags = ['clientes'],
       #swagger.security = [{
            "bearerAuth": []
    }] */
    try {
        const result = await query('SELECT * FROM clientes');
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
        res.status(200).json(result);
    
    } catch (error) {
        res.status(500).json({
          error: "Internal Server Error",
          message: "Ocorreu um erro interno no servidor."
        });
    }
};

const getCustomerById = async (req, res) => {
    /* 
    #swagger.tags = ['clientes'],
    #swagger.security = [{
                "BearerAuth": []
    }] 
    */
    const customerId = req.params.id; 

    try {
        const result = await query('SELECT * FROM clientes WHERE id = ?', [customerId]);
        
        if (result.length > 0) {
            res.json(result[0]); 
        } else {
            res.status(404).json({ error: "Cliente não encontrado" });
        }
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
            message: "Ocorreu um erro interno no servidor."
        });
    }
};

const updateCustomerById = async (req, res) => {
    /* 
    #swagger.tags = ['clientes'],
    #swagger.security = [{
                "BearerAuth": []
    }] 
    */
    const customerId = req.params.id; 
    const newData = req.body; 

    try {
        const updateColumns = Object.keys(newData).map(column => `${column} = ?`).join(', ');
        const values = [...Object.values(newData), customerId];
        const result = await query(`UPDATE clientes SET ${updateColumns} WHERE id = ?`, values);

        if (result.affectedRows > 0) {
            res.json({ message: `Cliente com ID ${customerId} atualizado com sucesso` });
        } else {
            res.status(404).json({ error: "Cliente não encontrado" });
        }
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
            message: "Ocorreu um erro interno no servidor."
        });
    }
};

const deleteCustomersByIds = async (req, res) => {
    /* 
    #swagger.tags = ['clientes'],
    #swagger.security = [{
                "BearerAuth": []
    }] 
    */
    const customerIds = req.params.id; 

    if (!customerIds || typeof customerIds !== 'string') {
        return res.status(400).json({ error: 'Parâmetro de IDs de clientes inválido' });
    }

    const customerIdsArray = customerIds.split(',').map(id => parseInt(id.trim(), 10));

    if (customerIdsArray.length === 0) {
        return res.status(400).json({ error: 'Array de IDs de clientes inválido ou vazio' });
    }

    try {
        const placeholders = customerIdsArray.map(() => '?').join(', ');
        const result = await query(`DELETE FROM clientes WHERE id IN (${placeholders})`, customerIdsArray);

        if (result.affectedRows > 0) {
            res.json({ message: `Clientes com IDs [${customerIdsArray.join(', ')}] excluídos com sucesso` });
        } else {
            res.status(404).json({ error: "Nenhum cliente encontrado para exclusão" });
        }
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
            message: "Ocorreu um erro interno no servidor."
        });
    }
};

module.exports = { 
    getAllCustomers, 
    getCustomerById, 
    updateCustomerById,
    deleteCustomersByIds
};
