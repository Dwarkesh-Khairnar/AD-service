
import express from 'express';
import axios from 'axios';

const router = express.Router();

// Test API route

router.get('/create-key', async (req, res) => {
    const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
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
    return res.json({ result })
});

const apiKeys = {
    'A1': { userId: 1, name: 'User One' },
    'user2_key': { userId: 2, name: 'User Two' },
    // Add more API keys as necessary
};

router.get('/fetch-date', async (req, res) => {
    const { url, apiKey, limit } = req.query;
    // Replace with your actual API key for validation

    // Validate API Key
    if (!apiKeys[apiKey]) {
        return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
    }

    // Validate URL
    if (!url) {
        return res.status(400).json({ error: 'Bad Request: URL is required' });
    }

    try {
        const response = await axios.get(url);
        const data = response.data;
        const date = new Date().toString(); // Returning current date as an example

        // Limit the response if a limit parameter is provided
        const limitedData = limit ? data.slice(0, parseInt(limit)) : data;

        return res.status(200).json({ date, limitedData });

        // // Assuming the date is in the response, you can adjust to fit your data structure

        // // return res.status(200).json({ date: date });
        // return res.status(200).json({ date: date, data: response.data });
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching data from the URL' });
    }
});

export default router;