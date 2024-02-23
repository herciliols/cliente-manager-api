const jwt = require('jsonwebtoken');
const { query } = require('../models/database');
const crypto = require('crypto');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
      const result = await query('SELECT * FROM users WHERE username = ? LIMIT 1', [username]);
      
      const user = result[0];
      const passwordHashMD5 = crypto.createHash('md5').update(password).digest('hex');
     
      if ((passwordHashMD5 !== user.password) || result.length === 0) {
        return res.status(401).json({ message: 'Credenciais inválidas'});
      }else{
        const token = jwt.sign({ userId: user.id, username: user.username }, 'seuSegredoSuperSecreto', {
          expiresIn: '10m', 
        });
        res.status(200).json({ token });
      }

  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { login };
