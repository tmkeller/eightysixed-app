// requires the model folder

const db = require("../models");

module.exports = function (app) {
  // create route for adding to the table Review in the db:
  app.post("/api/review", async (req, res) => {
    if (!req.session.business) {
      res
        .status(401)
        .send("please log into your business account to post a review");
    } else {
      const data = await db.Review.create(req.body).catch((err) => {
        res.status(500);
        console.error(err);
      });
      res.status(200).json(data);
    }
  });
  // get route for reading the whole table Review in the db:
  app.get("/api/review", async (req, res) => {
    const data = await db.Review.findAll().catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // get route for reading the all similar zip codes.
  app.get("/api/review/zip", async (req, res) => {
    const data = await db.Review.findAll({
      where: { zip5: req.body.zip5 },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // get route for reading the all reviews from a business *************************************************************************************************************************** var busId not created yet currently being used as a place holder
  app.get("/api/review/business", async (req, res) => {
    const data = await db.Review.findAll({
      include: [db.Business],
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // update route for updating the info in the table Review in the db: WIP
  app.put("/api/review/:id", async (req, res) => {
    const data = await db.Review.update(req.body, {
      where: { id: req.body.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // delete route for deleting the info in the table Review in the db:
  app.put("/api/review/:id", async (req, res) => {
    const data = await db.Review.destroy({
      where: { id: req.params.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });
};
