// requires the model folder

const { request } = require("express");
const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function (app) {
  // create route for adding to the table business in the db:
  app.post("/api/customer", async (req, res) => {
    const data = await db.Customer.create(req.body).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // checks encrypted password for login and email
  app.post("/api/customer/login", async (req, res) => {
    const data = await db.Customer.findOne({
      where: { email: req.body.email },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });

    if (!data) {
      res.status(404).send("username or password is incorrect");
    } else {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        req.session.customer = { id: data.id, email: data.email };
        res.status(200).json(data);
      } else {
        res.status(401).send("username or password is incorrect");
      }
    }
  });

  // cookies and session storage
  app.get("/readsessions/customer", (req, res) => {
    res.json(req.session);
  });

  // get route for reading the whole table Customer in the db:
  app.get("/api/customer", async (req, res) => {
    const data = await db.Customer.findAll().catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  // grabs customer with matching id as params
  app.get("/api/customer/:id", async (req, res) => {
    const data = await db.Customer.findOne({
      where: {
        id: req.params.id,
      },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });
  //////////customer search on business page////////
  app.get("/search-results/:first_name", async (req, res) => {
    db.Customer.findAll({
      where: {
        first_name: req.params.first_name,
      },
    }).then((data) => {
      const jsonData = data.map((obj) => {
        let newObj = obj.toJSON();
        if ( !newObj.pic ) {
          newObj.pic = "/assets/icons/icon-default-cust.jpg"
        }
        return newObj;
      });
      const hbsObj = {
        guests: jsonData
      };
      if (req.session.business) {
        hbsObj.business = req.session.business;
      } else if (req.session.customer) {
        hbsObj.customer = req.session.customer;
      }
      res.render("search-results", hbsObj);
    });
  });

  app.post("/api/customer/search", async (req, res) => {
    const data = await db.Customer.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });

    res.status(200).json(data);
  });

  // update route for updating the info in the table Customer in the db:

  // 
  app.put("/api/customer", async (req, res) => {
    const newPwd = (req.body.password = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10),
      null
    ));
    // update the password that comes from req.body to be the new hashed password
    req.body.password = newPwd;
    // update the database with that hashed password
    const data = await db.Customer.update(req.body, {
      where: { email: req.body.email },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });
  // 

  // delete route for deleting the info in the table Customer in the db:
  app.delete("/api/customer/:id", async (req, res) => {
    const data = await db.Customer.destroy({
      where: { id: req.params.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });
  //////////
  app.post("/api/customer/login", async (req, res) => {
    console.log(req.body)
    console.log("test")
    const data = await db.Customer.findOne({
      where: {email: req.body.email},
     }).catch((err) => {
      res.status(500);
      console.error(err);
    });

    if (!data) {
      res.status(404).send("username or password is incorrect");
    } else {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        req.session.customer = {
          id: data.id,
          first_name: data.name,
          last_name: data.email,
          isClaimed: data.isClaimed,
          city: data.city,
          state: data.state,
          zip5: data.zip5,
          email: data.email,
          pic: data.pic,
        };
        res.status(200).json(data);
      } else {
        res.status(401).send("username or password is incorrect");
      }
    }
  });
};
