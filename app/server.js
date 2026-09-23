// const express = require("express");

// const app = express();

// const PORT = 3000;

// app.get("/", (req, res) => {
//     res.send("QA Task Manager is running!");
// });

// app.listen(PORT, () => {
//     console.log(`QA Task Manager running on http://localhost:${PORT}`);
// });

const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`QA Task Manager running on http://localhost:${PORT}`);
});