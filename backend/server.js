const express = require("express");
const app = express();

app.get("/random", (req, res) => {
  console.log("get random");
  res.setHeader("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      value: Math.random(),
      username: process.env.TEMPLATE_USERNAME,
      password: process.env.TEMPLATE_PASSWORD
    })
  );
});

app.listen(3001, () => console.log("Example app listening on port 3001!"));
