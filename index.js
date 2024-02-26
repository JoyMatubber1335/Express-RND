const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const data = require("./Data");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(logger); //Initialize the middleware
// app.get("/", function (req, res) {
//   res.send("<h1>hellow joy ???</h1>");
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// set static file
// app.use(express.static(path.join(__dirname, "public")));
// Work with api
// Get
app.get("/app/allData", (req, res) => res.json(data));

app.listen(PORT, () => console.log(`server runnig onn ${PORT}`));
