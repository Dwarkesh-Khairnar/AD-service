import express from 'express';
import { client } from '../db/dbConnection.js'
import bcrypt from "bcrypt";
import jwtService from '../jwt/jwtService.js';

const router = express.Router();

router.post("/singup", async (req, res) => {
    let data = req.body;

    try {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return res.status(500).json({ message: "Error genreting salt", Error: err })

            bcrypt.hash(data.password, salt, async function (err, hash) {
                if (err) return res.status(500).json({ message: "Error hashing password", Error: err });
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

router.post("/singIn", async (req, res) => {
    const logInData = req.body;

    try {
        const result = await client.query('select * from users where mail=$1', [logInData.email])

        if (result.rows.length === 0) return res.status(404).json({ "message": "User not found!" })

        // Load hash from your password DB.
        const match = await bcrypt.compare(logInData.hast, result.rows[0].password)

        if (!match) {
            return res.status(404).json({ message: "Password not match" })
        }

        // token worker
        const token = jwtService.createToken(logInData)
        if (!token) return res.status(503).json({ "message": "Jwt service not work" })

        return res.status(200).json({ Data: logInData, secret: token })
    } catch (error) {
        return res.status(500).json({ message: "error on login", Error: error })
    }
})

export default router;