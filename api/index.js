// api/index.js
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import jwt from 'jsonwebtoken';
import apiRoutes from "./routes/apiRoutes.js"
import uploadRoutes from "./routes/upload.js"

dotenv.config();
const PORT = process.env.BACK_PORT || 5000
const app = express();
app.use(cors());           // allow frontend to call backend
app.use(express.json());   // parse JSON bodies
app.use(bodyParser.json())

const SK = process.env.jwtSK;

app.get("/api", (req, res) => {
    res.send(`<div style="height: 100%; width: 100%; ">

<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <div style="">
        <h1>Hello brother it is backend </h1>
        <p style="margin-left: 10px;">you can acesses Appication on <a href="http://localhost:5173/">http://localhost:5173/</a></p>
    </div>
</div>

</div>
<div style="height: 100%; width: 100%;display: flex; justify-content: center;align-items: center;">
    <p>Bro i said this is a backend way you scroll😅 </p>
  </div>`);
});

let token;                                                          // Need to store in redis cache
function authToken(req, res, next) {

    if (!token) return res.status(401).json({ "Error": "Token is empty" })

    jwt.verify(token, SK, (error, user) => {                        // Get token in redis
        if (error) return res.status(403).json({ "Error": 'invalid token' });
        console.log("work:",token);
        req.user = user;
        next();
    })
}

app.get('/api/testjwt', async (req, res) => {
    const username = "D"; // Simple user check
    token = jwt.sign({ username }, SK, { expiresIn:'20s' });        // Extend expiresin
    res.json({ token });
})

app.get('/api/test', authToken, (req, res) => {
    return res.status(200).json({ "Update": "Token works","Token":token})
    
})

// Api routes
app.use('/api/Curl', apiRoutes);
app.use('/api/uvideo', uploadRoutes);

// THIS IS THE SECRET:
if (process.env.NODE_ENV !== 'production') {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Local Server running on http://localhost:${PORT}`);
    });
}
export default app;