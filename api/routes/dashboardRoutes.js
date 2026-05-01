import express from "express";
import { client } from "../db/dbConnection.js";

const router = express.Router();

router.get('/adminDash', async (req, res) => {
    try {
        const result = await client.query('select * from users;')
        if(result.rows===0) res.status(400).json({message:"Data not found."})
        // console.log(result.rows);
        res.status(200).json({massega:"Users",data: result.rows})
    } catch (error) {
        res.status(400).json({ massega: "Error:" + error })
    }
})

export default router;