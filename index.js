const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
// robo data
const data = require("./data.js");
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("index", {data: data.users});
});
// listen to port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`listing on port ${port}`);
});
