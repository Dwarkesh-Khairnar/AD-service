import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    host: process.env.postgresql_host,
    user: process.env.postgresql_user,
    database: process.env.postgresql_database,
    password: process.env.postgresql_password ,
    port: process.env.postgresql_port,
    ssl: {
        rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED,
        ca: process.env.ssl_ca?.replace(/\\n/g,"\n"),
    },
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