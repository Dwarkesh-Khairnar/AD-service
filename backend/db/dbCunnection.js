const { Client } = require('pg');

const client = new Client({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432,
});

const connectDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Connection error', error.stack);
    }
};

// Export the client and the connect function
module.exports = {
    client,
    connectDatabase,
};