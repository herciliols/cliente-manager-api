import { pool } from '@config/database';
import { createHash } from 'crypto';


async function validateCredentials(username: string, password: string) {
   const passwordHashMD5 = createHash('md5').update(password).digest('hex');

   const isValid = await pool.query(
     "SELECT IFNULL((SELECT true FROM users WHERE username = ? AND password = ?), false) AS validCredentials", [username, passwordHashMD5]
   );
   
   return isValid;
}


export { validateCredentials };
