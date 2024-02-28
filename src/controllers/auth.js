const jwt = require('jsonwebtoken');
const { query } = require('../models/database');
const crypto = require('crypto');

const login = async (req, res) => {
  /*  #swagger.tags = ['auth'] 
      #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/LoginPostRequest"
                    }  
                }
            }
        } 
    */
  const { username, password } = req.body;


  if (!username || !password) {
      /* #swagger.responses[400] = {
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/LoginResponseBadRequest"
                    }
                }           
            }
        }   
        */
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
         /* #swagger.responses[401] = {
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/LoginResponseUnauthorized"
                    }
                }           
            }
        }   
        */
        return res.status(401).json({
          error: "Unauthorized",
          message: "Credenciais inválidas. A autenticação é necessária para acessar este recurso."
        });
      }else{
        const token = jwt.sign({ userId: user.id, username: user.username }, 'Ch4v3M1xTa', {
          expiresIn: '10m', 
        });
         /* #swagger.responses[200] = {
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/LoginResponseSuccess"
                    }
                }           
            }
        }   
        */
        res.status(200).json({ token: token });
      }

  } catch (error) {
     /* #swagger.responses[500] = {
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/LoginResponseInternalServerError"
                    }
                }           
            }
        }   
        */
      res.status(500).json({
        error: "Internal Server Error",
        message: "Ocorreu um erro interno no servidor."
      });
  }
};

module.exports = { login };
