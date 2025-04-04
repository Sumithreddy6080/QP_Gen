const { parseExcelFile } = require("../utils/fileParser");

let questionBank = null;

const uploadFile = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        questionBank = parseExcelFile(req.file.path);
        // console.log("Processed Question Bank:", questionBank);
        res.json({
            message: "File processed successfully",
            questionCount: questionBank.length
        });
    } catch (error) {
        console.error("Error processing file:", error);
        res.status(500).json({ error: "Error processing file" });
    }
};

module.exports = { uploadFile , questionBank};
