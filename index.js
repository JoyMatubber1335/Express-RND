const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
// const datas = require("./Data");

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

//      **** BODY PARSER MIDDLEWARE ******
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set static file
// app.use(express.static(path.join(__dirname, "public")));
// Work with api
// Member api route
// app.use(express.json());
app.use("/app/data", require("./route/api/DataApi"));

app.listen(PORT, () => console.log(`server runnig onn ${PORT}`));
