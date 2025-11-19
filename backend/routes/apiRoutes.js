
import express from 'express';
import axios from 'axios';
import { client, connectDatabase } from '../db/dbConnection.js'

const router = express.Router();
connectDatabase();
// Test API route

router.get('/get_data', async (req, res) => {
    try {
        const result = await client.query('select * from users;');

        res.json(result.rows)
    } catch (error) {
        console.log("Error:", error);

    }
});

router.get('/create-key', async (req, res) => {
    const characters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    ];
    let result = '';

    for (let index = 0; index < 23; index++) {
        const randum_num = Math.floor(Math.random() * characters.length);
        result += characters[randum_num]
    }
    let mail = 'abcd@gmail.com';
    let ok = true
    client.query(`insert into public.Keys_table(work_mail,api_key,isvalid) VALUES($1,$2,$3) RETURNING *`, [mail, result, ok], (err, res) => {

        if (err) {
            console.log('Error Executing query:', err.stack);
        } else {
            console.log("Inserted row", res.rows);
        }
    });
    return res.json({ result })
});

router.get('/fetch-ad', async (req, res) => {
    let { url, apiKey, limit } = req.query;
    let msg;

    // if (limit == 0 || limit == undefined) {
    // limit = 1;
    //     msg = 'Set limit for fast and good parfect response';
    // }

    // Validate URL
    if (!url) {
        return res.status(400).json({ error: 'Bad Request: URL is required' });
    }

    try {

        // Await the database query to validate the API key
        const result = await client.query(`SELECT * FROM public.keys_table WHERE api_key = $1`, [apiKey]);

        // Validate API Key - check if any rows were returned
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
        }

        console.log("Your API key:", result.rows[0].api_key);

        const response = await axios.get(url);
        const data = response.data;

        // const limitedData = limit ? data.slice(0, parseInt(limit)) : data;


        const link = await client.query(`select * from ad_links order by random() limit 1;`);
        if (link.rows.length === 0) {
            return res.status(401).json({ error: 'Your luck is good ad not aweleble right now' });
        }

        res.status(200).json({ message: msg, data: link.rows[0].video_link ,Provaider:'Service given by Part of Softwere Ad_service Plathform'});

    } catch (error) {
        return res.status(500).json({ error: 'Error fetching data from the URL' });

    }
});

export default router;

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomNum = getRandomNumber(1, 9);
// console.log(randomNum);
