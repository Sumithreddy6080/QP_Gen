const { getQuestionBank } = require("../utils/fileParser");

// need to be changed .

const generateQuestions = (req, res) => {
    const questionBank = getQuestionBank();

    if (!questionBank || questionBank.length === 0) {
        return res.status(400).json({ error: "No question bank available. Please upload first." });
    }

    const generated = [];

    for (let unit = 1; unit <= 5; unit++) {
        const unitQuestions = questionBank.filter(q => q.unit === unit);
        const selected = unitQuestions.slice(0, 2); 
        generated.push(...selected);
    }

    res.json({
        message: "Questions generated successfully",
        questions: generated
    });
};

module.exports = { generateQuestions };
