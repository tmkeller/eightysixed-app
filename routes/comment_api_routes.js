// requires the model folder

const db = require("../models");

module.exports = function (app) {
  // create route for adding to the table Comment in the db: WIP
  app.post("/api/comment", async (req, res) => {
    const data = await db.Comment.create(req.body).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });
  // get route for reading the whole table Comment in the db: WIP
  app.get("/api/comment", async (req, res) => {
    const data = await db.Comment.findall().catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // update route for updating the info in the table Comment in the db: WIP
  app.put("/api/comment/:id", async (req, res) => {
    const data = await db.Comment.update(req.body, {
      where: { id: req.body.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // delete route for deleting the info in the table Comment in the db: WIP
  app.put("/api/comment/:id", async (req, res) => {
    const data = await db.Comment.destroy({
      where: { id: req.params.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });
};
