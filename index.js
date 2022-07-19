const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! YAY☺  ");
});

app.listen(5000, () => {
  console.log("listening");
});
