const { query } = require('../models/database');

const getAllCustomers = async (req, res) => {

    try {
        const result = await query('SELECT * FROM clientes');
        res.json(result);
    
    } catch (error) {
        res.status(500).json({
          error: "Internal Server Error",
          message: "Ocorreu um erro interno no servidor."
        });
    }
};

const getCustomerById = async (req, res) => {
    const customerId = req.params.id; // Obtém o ID da URL

    try {
        const result = await query('SELECT * FROM clientes WHERE id = ?', [customerId]);
        
        if (result.length > 0) {
            res.json(result[0]); // Retorna o cliente com o ID especificado como JSON
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

module.exports = { 
    getAllCustomers, 
    getCustomerById, 
    updateCustomerById 
};
