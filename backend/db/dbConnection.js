import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    user: process.env.postgresql_user,
    host: 'localhost',
    database: process.env.postgresql_database,
    password: process.env.postgresql_possword,
    port: 5432,
});

export const connectDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Connection error', error.stack);
    }
};

// Export the client and the connect function
export{
    client
};