const express = require("express");
const { uploadFile } = require("../controllers/fileUpload.controller");
const upload = require("../utils/multerConfig"); // Import Multer configuration

const router = express.Router();

router.post("/upload", upload.single("excelFile"), uploadFile);

module.exports = router;
