// requires the model folder

const db = require("../models");

module.exports = function (app) {
  // create route for adding to the table Review in the db:
  app.post("/api/review", async (req, res) => {
    const data = await db.Review.create(req.body);
    res
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });
  // get route for reading the whole table Review in the db:
  app.get("/api/review", async (req, res) => {
    const data = await db.Review.findall();
    res
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });

  // update route for updating the info in the table Review in the db: WIP
  app.put("/api/review/:id", async (req, res) => {
    const data = await db.Review.update(req.body, {
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

  // delete route for deleting the info in the table Review in the db:
  app.put("/api/review/:id", async (req, res) => {
    const data = await db.Review.destroy({ where: { id: req.params.id } });
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
