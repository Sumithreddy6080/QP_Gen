const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/fileUpload.route");
const generateRoutes = require("./routes/generate.route")

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/qs", uploadRoutes);
app.use("/api/qs", generateRoutes);   // /generate



const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
