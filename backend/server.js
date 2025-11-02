// backend/server.js
import express from "express";
// import cors from "cors";
import axios from "axios";
const PORT =3000;

const app = express();
// app.use(cors());           // allow frontend to call backend
// app.use(express.json());   // parse JSON bodies

// Test API route
app.get("/", (req, res) => {
  res.send(`<div style="height: 100%; width: 100%; ">

<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <div style="">
        <h1>Hello brother it is backend </h1>
        <p>you can acesses Appication on <a href="http://localhost:5173/">http://localhost:5173/</a></p>
    </div>
</div>

</div>`);
});
const apiKeys = {
    'A1': { userId: 1, name: 'User One' },
    'user2_key': { userId: 2, name: 'User Two' },
    // Add more API keys as necessary
};

app.get('/fetch-date', async (req, res) => {
    const { url, apiKey,limit } = req.query;
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

        return res.status(200).json({date,limitedData}); 

        // // Assuming the date is in the response, you can adjust to fit your data structure

        // // return res.status(200).json({ date: date });
        // return res.status(200).json({ date: date, data: response.data });
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching data from the URL' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});