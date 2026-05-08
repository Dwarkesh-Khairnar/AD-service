import express from 'express';
import axios from 'axios';
import { client, connectDatabase } from '../db/dbConnection.js'

const router = express.Router();


// Api endpoint fo Ad runs
router.get('/fetch-ad', async (req, res) => {
    let { url, apiKey, limit } = req.query;
    let msg;
const addnumber=1;

    // if (limit == 0 || limit == undefined) {
    //     limit = 1;
    //     msg = 'Set limit for fast and good parfect response but default limit is 1';
    // }

    // Validate URL
    // if (!url) {
    //     return res.status(400).json({ error: 'Bad Request: URL is required' });
    // }

    try {

        // Await the database query to validate the API key
    /*    const result = await client.query(`SELECT * FROM public.api_keys WHERE Key = $1`, [apiKey]);

        // Validate API Key - check if any rows were returned
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
        }

        console.log("Your API key:", result.rows[0].Key);

        const response = await axios.get(url);
        const data = response.data;

        const limitedData = limit ? data.slice(0, parseInt(limit)) : data;
    */
        const link = await client.query(`select * from ad_links where isactive = true order by random() limit 1;`);

        if (link.rows.length === 0) {
            return res.status(401).json({ error: 'Your luck is good ad not aweleble right now' });
        }

        const count=await client.query('UPDATE ad_links SET apparencies = apparencies+$1 WHERE id=$2;',[addnumber,link.rows[0].id])

        res.status(200).json({ message: msg, ad_link: link.rows[0].ad_link,target_link: link.rows[0].target_link, Provaider: 'Service given by Part of Softwere Ad_service Plathform' });

    } catch (error) {
        return res.status(500).json({ error: 'Error fetching data from the URL' + error });
    }
});

export default router;
