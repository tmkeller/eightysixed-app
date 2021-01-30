// requires the model folder

const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function (app) {
  // create route for adding to the table business in the db:
  app.post("/api/business", async (req, res) => {
    const data = await db.Business.create(req.body).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // checks encrypted password for login and email
  app.post("/api/business/login", async (req, res) => {
    const data = await db.Business.findOne({
      where: { email: req.body.email },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });

    if (!data) {
      res.status(404).send("username or password is incorrect");
    } else {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        req.session.business = { id: data.id, email: data.email };
        res.status(200).json(data);
      } else {
        res.status(401).send("username or password is incorrect");
      }
    }
  });

  // get route for reading the whole table business in the db:
  app.get("/api/business", async (req, res) => {
    const data = await db.Business.findall().catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.render("index", data).status(200).json(data);
  });

  // cookies and session storage
  app.get("/readsessions/business", (req, res) => {
    res.json(req.session);
  });

  // update route for updating the info in the table business in the db: WIP
  app.put("/api/business/:id", async (req, res) => {
    const data = await db.Business.update(req.body, {
      where: { id: req.body.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // delete route for deleting the info in the table business in the db:
  app.put("/api/business/:id", async (req, res) => {
    const data = await db.Business.destroy({
      where: { id: req.params.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });
};
