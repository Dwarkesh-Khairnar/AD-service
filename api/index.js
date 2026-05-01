// api/index.js
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv';
import bodyParser from "body-parser";

// Files/Routes
import apiRoutes from "./routes/apiRoutes.js"
import uploadRoutes from "./routes/upload.js"
import AuthRoutes from './routes/AuthRoutes.js'
import dashboard from "./routes/dashboardRoutes.js";

// Middleware
import authenticateToken from "./Middleware/authMiddleware.js";
import jwtService from "./jwt/jwtService.js";

dotenv.config();
const PORT = process.env.BACK_PORT || 5000
const app = express();
app.use(cors());           // allow frontend to call backend
app.use(express.json());   // parse JSON bodies
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.send(`<div style="height: 100%; width: 100%; ">

<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <div style="">
        <h1>Hello brother it is backend </h1>
        <p style="margin-left: 10px;">you can acesses Appication on <a href="http://ad-service.vercel.app">http://ad-service.vercel.app</a></p>
    </div>
</div>

</div>
<div style="height: 100%; width: 100%;display: flex; justify-content: center;align-items: center;">
    <p>Bro i said this is a backend way you scroll😅 </p>
  </div>`);
});

app.get('/test', authenticateToken, (req, res) => {
    const data = req.body;
    console.log('Data From Backend:', data)
    return res.status(200).json({ "Data": data })
})

// Api routes
app.use('/api/Auth', AuthRoutes);
app.use('/api/curl', apiRoutes);
app.use('/api/uvideo',authenticateToken, uploadRoutes);
app.use('/api/dashboard', dashboard);

// THIS IS THE SECRET:
if (process.env.NODE_ENV !== 'production') {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Local Server running on http://localhost:${PORT}`);
    });
}
export default app;