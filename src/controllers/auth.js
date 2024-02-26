const jwt = require('jsonwebtoken');
const { query } = require('../models/database');
const crypto = require('crypto');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Campos obrigatórios 'username' e 'password' são necessários e não podem estar vazios."
    });
  }

  try {
      const result = await query('SELECT * FROM users WHERE username = ? LIMIT 1', [username]);
      
      const user = result[0];
      const passwordHashMD5 = crypto.createHash('md5').update(password).digest('hex');
     
      if ((passwordHashMD5 !== user.password) || result.length === 0) {
        return res.status(401).json({
          error: "Unauthorized",
          message: "Credenciais inválidas. A autenticação é necessária para acessar este recurso."
        });
      }else{
        const token = jwt.sign({ userId: user.id, username: user.username }, 'Ch4v3M1xTa', {
          expiresIn: '10m', 
        });
        res.status(200).json({ token: token });
      }

  } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        message: "Ocorreu um erro interno no servidor."
      });
  }
};

module.exports = { login };
