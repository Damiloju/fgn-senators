const express = require("express");
const senators = require("../senators");

const app = express();
const port = process.env.PORT || 3000;

// Get all senators
app.get("/api/senators", (req, res) => {
  const allSenators = senators.getSenators();
  res.status(200).json(allSenators);
});

// Get all senator by name
app.get("/api/senator", (req, res) => {
  if (!req.query.name) {
    return res.status(200).json({
      error: "Please provide a name"
    });
  }

  const senator = senators.getSenator(req.query.name);

  res.status(200).json(senator);
});

// Get senators by state
app.get("/api/senators/:state", (req, res) => {
  const allSenators = senators.getSenatorsByState(req.params.state);

  res.status(200).json(allSenators);
});

app.get("*", (req, res) => {
  res.status(404).json({
    title: "route not found",
    message: "that route does not exist"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
