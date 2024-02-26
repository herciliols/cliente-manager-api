const mysql = require('mysql2/promise'); // Importe a versão 'promise' do mysql2
const dotenv = require('dotenv');

dotenv.config({ path: '../../.env' });

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection() 
    .then((connection) => {
        connection.release();
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

async function query(sql, values) {
    const connection = await pool.getConnection();
    try {
        const [rows, fields] = await connection.execute(sql, values);
        return rows;
    } finally {
        connection.release();
    }
}

module.exports = { query };
