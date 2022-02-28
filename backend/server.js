const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

// welcome message for root url
app.get("/", (req, res) => {
  //res.status(200).json({ message: "Welcome to the likedecks API" });
  res.status(200).send("Welcome to the likedecks API");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
