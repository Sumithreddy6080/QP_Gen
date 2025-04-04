const XLSX = require("xlsx");
const fs = require("fs");

let questionBank = null;

const parseExcelFile = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Clean and process data
    questionBank = processExcelData(jsonData);

    fs.unlinkSync(filePath); // Remove file after processing
    return questionBank;
};

const getQuestionBank = () => {
    return questionBank;
};

const processExcelData = (data) => {
    return data.map((row, index) => {
        const btLevel = String(row["B.T Level"] || "").trim().replace(/^L/i, "");
        let questionText = row.Question || "";

        if (typeof questionText === "string") {
            questionText = questionText.replace(/\"<br>\"/g, "<br>");
            if (!questionText.includes("<br>")) {
                questionText = questionText.replace(/(\d+\.\s|[a-z]\)\s)/g, "$1<br>");
            }
        }

        return {
            id: index + 1,
            unit: parseInt(row.Unit) || 0,
            question: questionText,
            btLevel: btLevel || "0",
            subjectCode: row["Subject Code"] || "",
            subject: row.Subject || "",
            branch: row.Branch || "",
            regulation: row.Regulation || "",
            year: row.Year || "",
            semester: row.Sem || "",
            month: row.Month || "",
            imageUrl: row["Image Url"] || ""
        };
    }).filter(q => q.unit >= 1 && q.unit <= 5 && q.btLevel !== "0");
};

module.exports = { parseExcelFile, getQuestionBank };
