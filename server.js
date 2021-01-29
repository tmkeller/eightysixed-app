var express = require("express");
const db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
/////////////////////////////////
const handlebars = require("express-handlebars");
//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");
//Sets handlebars configurations (we will go through them later on)
app.engine(
  "handlebars",
  handlebars({ layoutsDir: __dirname + "/views/layouts" })
);
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/business_api_routes.js")(app);
require("./routes/comment_api_routes.js")(app);
require("./routes/customer_api_route.js")(app);
require("./routes/review_api_route.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
