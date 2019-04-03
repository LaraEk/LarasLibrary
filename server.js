var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8990;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

app.listen(PORT, function() {
  console.log("beep boop, listening on PORT", PORT);
});
