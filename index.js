const express = require("express");
require("dotenv").config(); //loads .env file into process.env
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res)=> {
    res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
