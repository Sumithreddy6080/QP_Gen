const express = require("express");
const { generateQuestions } = require("../controllers/QsGenerate.controller");

const router = express.Router();

router.get("/generate", generateQuestions);

module.exports = router;
