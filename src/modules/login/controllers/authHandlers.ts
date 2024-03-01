import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { validateCredentials } from '@modules/login/models/authQueries';

interface LoginRequestBody {
  username: string;
  password: string;
}

const login = async (req: Request, res: Response) => {
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
  const { username, password }: LoginRequestBody = req.body;
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
  if (!username || !password) {  
    return res.status(400).json({
      error: "Bad Request",
      message: "Campos obrigatórios 'username' e 'password' são necessários e não podem estar vazios."
    });
  }

  try {
      const isValid = await validateCredentials(username, password);
      if(isValid){
        const token = sign({ username: username, password: password }, 'Ch4v3M1xTa', {
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
        return res.status(200).json({ token: token });
      }else{
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
      return res.status(500).json({
        error: "Internal Server Error",
        message: "Ocorreu um erro interno no servidor."
      });
  }
};

export { login };
