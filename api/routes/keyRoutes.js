
import express from 'express';
import axios from 'axios';
import { client, connectDatabase } from '../db/dbConnection.js'

const router = express.Router();
connectDatabase();

// Test API route
router.get('/get_data', async (req, res) => {
    try {
        const result = await client.query('select * from users limit 20;');
        res.status(200).json("User data" + result.rows)
    } catch (error) {
        // console.log("Error:", error);
        res.status(400).json({ massega: "Error:" + error })
    }
});

// Key verification onload
router.get('/verify-key', async (req, res) => {

    let user_id = 3;
    let ok = true

    try {
        const dbresult = await client.query(`select * from public.api_keys where user_id=$1;`, [user_id]);

        if (dbresult.rows.length > 0) {
            // console.log("Existing API Key:", dbresult.rows);
            const existingApiKey = dbresult.rows[0].key;
            // console.log(existingApiKey);

            return res.json({ user_id, key: existingApiKey });

        } else {
            // console.log('No rows found for email:', user_id);
            // return res.status(404).json({ massega: 'userId not found', apiKey: null });
        }

    } catch (error) {
        console.log('Error Executing query:' + error);
        return res.status(500).json({ error: 'Database error' + error });
    }
});

// fetch by button
router.get('/create-new-key', async (req, res) => {

    const characters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    ];

    let result = '';
    let user_id = 3;
    let ok = true;
    try {
        for (let index = 0; index < 23; index++) {
            const randum_num = Math.floor(Math.random() * characters.length);
            result += characters[randum_num];
        }

        const insertdata = await client.query(`insert into public.api_keys(user_id,Key) VALUES($1,$2) RETURNING *`, [user_id, result]);

        console.log("Inserted row", insertdata.rows);
        return res.json({ mail, NewKey: result })

    } catch (error) {
        console.log('Error Executing query:', error);
        return res.status(500).json({ error: 'Database error' + error });
    }
});
export default router;
