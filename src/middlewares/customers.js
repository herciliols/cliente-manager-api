const validator = require('validator');

const validateUpdateCustomerData = (req, res, next) => {
    const newData = req.body;

    if (newData.nome && !validator.isAlpha(newData.nome, 'pt-BR', { ignore: ' ' })) {
        return res.status(400).json({ error: "O nome deve conter apenas letras" });
    }

    if (newData.sobrenome && !validator.isAlpha(newData.sobrenome, 'pt-BR', { ignore: ' ' })) {
        return res.status(400).json({ error: "O sobrenome deve conter apenas letras" });
    }

    if (newData.sexo && !validator.isIn(newData.sexo, ['Masculino', 'Feminino'])) {
        return res.status(400).json({ error: "O sexo deve ser 'Masculino' ou 'Feminino'" });
    }

    if (newData.data_nascimento && !validator.isISO8601(newData.data_nascimento)) {
        return res.status(400).json({ error: "A data de nascimento deve estar no formato ISO8601" });
    }

    next();
};

module.exports = {
    validateUpdateCustomerData
};
