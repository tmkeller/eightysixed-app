// requires the model folder

const db = require("../models");

module.exports = function (app) {
  // create route for adding to the table business in the db:
  app.post("/api/business", async (req, res) => {
    const data = await db.Business.create(req.body);
    res
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });
  // get route for reading the whole table business in the db:
  app.get("/api/business", async (req, res) => {
    const data = await db.Business.findall();
    res.render("index", data)
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });

  // update route for updating the info in the table business in the db: WIP
  app.put("/api/business/:id", async (req, res) => {
    const data = await db.Business.update(req.body, {
      where: { id: req.body.id },
    });
    res
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });

  // delete route for deleting the info in the table business in the db:
  app.put("/api/business/:id", async (req, res) => {
    const data = await db.Business.destroy({ where: { id: req.params.id } });
    res
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });
};
