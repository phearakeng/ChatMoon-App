const express = require("express");
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("ENG-PHEARAK's The Moon_App is running..."));
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('/public/'));

app.get("/", (req, res) => res.send("Welcome to ENG-PHEARAK's The Moon_App"));