const express = require("express");
const senators = require("../senators");

const app = express();
const port = process.env.PORT || 3000;

app.get("/senators", (req, res) => {
  const allSenators = senators.getSenators();
  res.json(allSenators);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
