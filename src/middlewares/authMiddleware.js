const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token, 'seuSegredoSuperSecreto');
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token invalido' });
    }
};

module.exports = { authenticateUser };