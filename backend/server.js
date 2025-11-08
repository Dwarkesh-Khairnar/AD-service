// backend/server.js
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv';
import apiRoutes from "./routes/apiRoutes.js"
import bodyParser from "body-parser";
import jwt from 'jsonwebtoken';

dotenv.config();
const PORT = process.env.BACK_PORT
const app = express();
app.use(cors());           // allow frontend to call backend
app.use(express.json());   // parse JSON bodies
app.use(bodyParser.json())

const SK="23@!jnw";

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

app.get('/test', async(req,res)=>{
       const username = "dwarkesh"; // Simple user check
    const token = jwt.sign({ username }, SK, { expiresIn: '1h' });
    res.json({ token });
})
// Api routes
app.use('/api',apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});