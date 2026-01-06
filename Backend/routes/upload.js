import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { Storage } from "megajs";
import cors from "cors";
import { client, connectDatabase } from '../db/dbConnection.js'

const router = express.Router();

router.use(cors());

// Multer temp folder
const upload = multer({
  dest: path.join(process.cwd(), "tmp_uploads/")
});

// API: Upload video to MEGA
router.post("/upload-video", upload.any(), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "File missing" });
    }

    // pick first file (adjust if you expect a specific field name)
    const fileMeta = req.files[0];
    console.log("FILE INFO:", fileMeta);

    // Login into MEGA
    const storage = new Storage({
      email: process.env.mega_mail,
      password: process.env.mega_pass,
    });

    await new Promise((resolve, reject) => {
      storage.on("ready", resolve);
      storage.on("error", reject);
    });

    console.log("Logged in");

    // ------------------------------
    // 👉 STEP 1: Get (or create) folder
    // ------------------------------
    const folderName = "Ads";  // change folder name here

    let folder = storage.root.children.find(
      item => item.name === folderName
    );

    // Create folder if not exist
    if (!folder) {
      folder = await storage.mkdir(folderName);
      console.log("Folder created:", folderName);
    } else {
      console.log("Folder found:", folderName);
    }

    // ------------------------------
    // 👉 STEP 2: Upload file *inside folder*
    // ------------------------------
    const fileStream = fs.createReadStream(fileMeta.path);

    const uploadStream = folder.upload(
      { name: fileMeta.originalname, size: fileMeta.size },
      fileStream
    );

    const megaFile = await uploadStream.complete;

    // Get public link
    const link = await new Promise((resolve, reject) => {
      megaFile.link((err, link) =>
        err ? reject(err) : resolve(link)
      );
    });

    // Delete temp file
    fs.unlinkSync(fileMeta.path);

    const Embedlink = `https://mega.nz/embed/${link.split('/')[4]}!1a1m`;   //Link modify to Embed link

    console.log("Link:" + link, "Embedlink :" + Embedlink);

    // Database Link Adding section

    try {
      const result = await client.query(`Insert into public.ad_links(work_mail,video_link)values($1,$2) RETURNING*`, [mail, Embedlink]);
      console.log("Inserted row", result.rows);
      return res.json({ status: "success", Link: link ,DBResult:result.rows});

    } catch (error) {
      console.log("DATABASE ERROR:", err);
      res.status(500).json({ error: err.message });
    }
  } catch (err) {
    console.log("SERVER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;