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

// advertiser dashboard section
router.get('/advertiserDash', async (req, res) => {
    const id = req.query.id;
    if (!id) return res.status(400).json({ message: 'Missing id',Id:id });

    try {
        const result = await client.query('select*from ad_links where user_id=$1', [id])
        console.log(result);

        if (result.rows === 0) res.status(400).json({ message: "Data not found." })

        res.status(200).json({ message: "succsess", data: result.rows })

    } catch (err) {
        res.status(400).json({ message: 'Server error get data', error: err })
    }
})

export default router;