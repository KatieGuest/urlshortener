const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
