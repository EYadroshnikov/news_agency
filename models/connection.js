import mysql from 'mysql2/promise';
import 'dotenv/config';

const createConnection = async () => {
    try {
        return await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DATABASE
        });
    } catch (error) {
        console.error('Error creating database connection:', error.message);
        throw error;
    }
};

export default createConnection;