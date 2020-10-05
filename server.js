const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
path = require("path");
const app = express();
const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});
var corsOptions = {
  origin: "http://localhost:8082",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
global.__basedir = __dirname;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/uploads")));
// simple route
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to new-sku application." });
});
require("./app/routes/products.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
