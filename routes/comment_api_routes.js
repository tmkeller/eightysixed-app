// requires the model folder

const db = require("../models/comment_model");

module.exports = function (app) {
  // create route for adding to the table Comment in the db:
  app.post("/api/comment", async (req, res) => {
    const data = await db.Comment.create(req.body);
    res
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });
  // get route for reading the whole table Comment in the db:
  app.get("/api/comment", async (req, res) => {
    const data = await db.Comment.findall();
    res
      .status(200)
      .json(data)
      .catch((err) => {
        res.status(500);
        console.err(err);
        throw err;
      });
  });

  // update route for updating the info in the table Comment in the db: WIP
  app.put("/api/comment/:id", async (req, res) => {
    const data = await db.Comment.update(req.body, {
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

  // delete route for deleting the info in the table Comment in the db:
  app.put("/api/comment/:id", async (req, res) => {
    const data = await db.Comment.destroy({ where: { id: req.params.id } });
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
