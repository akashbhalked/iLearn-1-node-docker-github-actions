const express = require("express");
const app = express();
//require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/sum", (req, res) => {
  const resp = Number(req.query.a) + Number(req.query.b);
  res.json({ result: resp });
  //console.log(req.query);
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});

module.exports = app;
