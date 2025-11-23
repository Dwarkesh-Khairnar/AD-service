import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { Storage } from "megajs";
import cors from "cors";

const router = express.Router();

router.use(cors());

// Multer temp folder
const upload = multer({
  dest: path.join(process.cwd(), "tmp_uploads/")
});

// API: Upload video to MEGA
router.post("/upload-video", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "File missing" });

    console.log("FILE INFO:", req.file);
    
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
    const fileStream = fs.createReadStream(req.file.path);

    const uploadStream = folder.upload(
      { name: req.file.originalname, size: req.file.size },
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
    fs.unlinkSync(req.file.path);
console.log(link);

    return res.json({ status: "success", link });
  } catch (err) {
    console.log("SERVER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;