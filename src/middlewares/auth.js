const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const tokenHeader = req.header('Authorization');

    if (!tokenHeader) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    const token = tokenHeader.replace('Bearer ', ''); 

    try {
        const decoded = jwt.verify(token, 'Ch4v3M1xTa');
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = { authenticateUser };