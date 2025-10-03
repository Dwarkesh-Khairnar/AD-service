// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());           // allow frontend to call backend
app.use(express.json());   // parse JSON bodies

// Test API route
app.get("/", (req, res) => {
  res.send(`<div style="height: 100%;">

<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <div style="width: 100vw;">
        <h1>Hello brother it is backend </h1>
        <p>you can acesses Appication on <a href="http://localhost:5173/">http://localhost:5173/</a></p>
    </div>
</div>

</div>`);
});

// POST endpoint to receive data from Hero section
app.post("/api/submit", (req, res) => {
  const { name, email } = req.body;
  console.log("Received:", req.body);
  // send response back
  res.json({ message: `Hello ${name}! Your email ${email} is received.` });
});


// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
