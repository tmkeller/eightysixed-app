var express = require("express");
const db = require("./models");
const session = require("express-session");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 2 },
  })
);

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
require("./routes/backend-get-routes.js")(app);
require("./routes/backend-delete-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
<<<<<<< HEAD

// Change force: to true if it's cool for the site to remove database items.
db.sequelize.sync({ force: false }).then(function () {
=======
db.sequelize.sync({ force:false}).then(function () {
>>>>>>> db0079d4b18bdc7dd62d43bb999ce2fdc5632836
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
