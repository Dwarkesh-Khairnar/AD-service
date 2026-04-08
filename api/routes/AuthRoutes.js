import express from 'express';
import { client } from '../db/dbConnection.js'

const router = express.Router();

router.post("/singup", async (req, res) => {
    let data = req.body;

    try {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return res.status(500).json({ message: "Error genreting salt",Error:err})

            bcrypt.hash(data.password, salt, async function (err, hash) {
                if (err) return res.status(500).json({ message: "Error hashing password",Error:err});
                // DB 
                const result = await client.query('insert into users(company_name,mail,secondary_mail,key_words,role,password) values($1,$2,$3,$4,$5,$6)', [data.company_name, data.mail, data.secondary_mail, data.key_words, data.role, hash]);
                if (result.rowCount === 0) return res.status(400).json({ message: "User not create , Bad request" })
            });
        });

        return res.status(201).json({ message: "User created successfully!" });

    } catch (error) {
        return res.status(500).json({ message: "Database error: Insertion failed", Error: error })

    }
})

export default router;