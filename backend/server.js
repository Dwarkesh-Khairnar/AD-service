// backend/server.js
import express from "express";
import cors from 'cors'
import axios from "axios";
import dotenv from 'dotenv';
import apiRoutes from "./routes/apiRoutes.js"
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());           // allow frontend to call backend
app.use(express.json());   // parse JSON bodies

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

app.use('/api',apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});