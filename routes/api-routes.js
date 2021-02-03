// requires DB
const db = require("../models");

module.exports = function (app) {
  // landing page route
  app.get("/", function (req, res) {
    db.Customer.findAll().then((data) => {
      const jsonData = data.map((obj) => {
        const newObj = obj.toJSON();
        let avg_rating = 4.6; // This is test code. Delete it when we can get average ratings.
        newObj.star_width = Math.floor((avg_rating / 5) * 187) + "px";
        if ( !newObj.pic ) {
          newObj.pic = '/assets/icons/icon-default-cust.jpg'
        }
        return newObj;
      });
      const hbsObj = {
        guests: jsonData,
      };
      if (req.session.business) {
        hbsObj.business = req.session.business;
      } else if (req.session.customer) {
        hbsObj.customer = req.session.customer;
      }
      res.render("index", hbsObj);
    });
  });

  //   401 page redirect error
  app.get("/401", function (req, res) {
    const hbsObj = {};
    if (req.session.business) {
      hbsObj.business = req.session.business;
    } else if (req.session.customer) {
      hbsObj.customer = req.session.customer;
    }
    res.render("401", hbsObj);
  });

  // 404 page redirect error
  app.get("/404", function (req, res) {
    const hbsObj = {};
    if (req.session.business) {
      hbsObj.business = req.session.business;
    } else if (req.session.customer) {
      hbsObj.customer = req.session.customer;
    }
    res.render("404", hbsObj);
  });

  //  route to the customer profile page
  app.get("/customer-profile/:id", async function (req, res) {
    const customer = await db.Customer.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Review],
    }).catch((err) => {
      res.status(500).json(err);
    });

    let business;
    if (req.session.business) {
      business = await db.Business.findOne({
        where: {
          id: req.session.business.id,
        },
      }).catch((err) => {
        res.status(500).json(err);
      });
    }

    if (!customer) {
      const hbsObj = {
        text: "customer",
      };
      if (req.session.business) {
        hbsObj.business = req.session.business;
      } else if (req.session.customer) {
        hbsObj.customer = req.session.customer;
      }
      res.render("404", hbsObj);
    } else {
      const reviews = customer.Reviews.map((obj) => {
        return obj.toJSON();
      });
      const reversedReviews = reviews.reverse();
      const hbsObj = {
        id: customer.dataValues.id,
        first_name: customer.dataValues.first_name,
        last_name: customer.dataValues.last_name,
        city: customer.dataValues.city,
        state: customer.dataValues.state,
        zip: customer.dataValues.zip5,
        email: customer.dataValues.email,
        password: customer.dataValues.password,
        pic: ( customer.dataValues.pic || '/assets/icons/icon-default-cust.jpg' ),
        createdAt: customer.dataValues.updatedAt,
        updatedAt: customer.dataValues.createdAt,
        reviews: reversedReviews,
      };
      if (business) {
        hbsObj.businessData = business.toJSON();
      }
      if (req.session.business) {
        hbsObj.business = req.session.business;
      } else if (req.session.customer) {
        hbsObj.customer = req.session.customer;
      }
      res.render("customer-profile", hbsObj);
    }
  });

  //   main business landing page (after login)
  app.get("/business-main", async function (req, res) {
    if (!req.session.business) {
      res.render("401");
    } else {
      const customers = await db.Customer.findAll({
        where: {
          BusinessId: req.session.business.id,
        },
      }).catch((err) => {
        res.status(500).json(err);
      });
      const business = await db.Business.findOne({
        where: {
          id: req.session.business.id,
        },
      }).catch((err) => {
        res.status(500).json(err);
      });

      const jsonData = data.map((obj) => {
        const newObj = obj.toJSON();
        let avg_rating = 4.6; // This is test code. Delete it when we can get average ratings.
        newObj.star_width = Math.floor((avg_rating / 5) * 187) + "px";
        if ( !newObj.pic ) {
          newObj.pic = '/assets/icons/icon-default-cust.jpg'
        }
        return newObj;
      });
      const hbsObj = await {
        businessData: business.toJSON(),
        customers: jsonData,
        // This is necessary any time you're rendering a page
        // where the user should be logged in. Looks like this for customers:
        // customer: req.session.customer
        business: req.session.business,
      };
      if (hbsObj.businessData.state) {
        const state = hbsObj.businessData.state.replace(/ /g, "");
        hbsObj.businessData[state] = true;
      }
      res.render("business-main", hbsObj);
    }
  });

  // grabs the customers for a business that is logged in and renders the rating on the card
  app.get("/business-main/:id", async function (req, res) {
    const customers = await db.Customer.findAll({
      where: {
        BusinessId: req.params.id,
      },
    }).catch((err) => {
      res.status(500).json(err);
    });
    const business = await db.Business.findOne({
      where: {
        id: req.params.id,
      },
    }).catch((err) => {
      res.status(500).json(err);
    });

    const jsonData = customers.map((obj) => {
      const newObj = obj.toJSON();
      let avg_rating = 4.6; // This is test code. Delete it when we can get average ratings.
      newObj.star_width = Math.floor((avg_rating / 5) * 187) + "px";
      if ( !newObj.pic ) {
        newObj.pic = '/assets/icons/icon-default-cust.jpg'
      }
      return newObj;
    });
    if (business) {
      const hbsObj = await {
        businessData: business.toJSON(),
        customers: jsonData,
        // This is necessary any time you're rendering a page
        // where the user should be logged in. Looks like this for customers:
        // customer: req.session.customer
        business: req.session.business,
      };
      if (hbsObj.businessData.state) {
        const state = hbsObj.businessData.state.replace(/ /g, "");
        hbsObj.businessData[state] = true;
      }
      console.log( hbsObj )
      res.render("business-main", hbsObj);
    } else {
      const hbsObj = {
        text: "business",
      };
      if (req.session.business) {
        hbsObj.business = req.session.business;
      } else if (req.session.customer) {
        hbsObj.customer = req.session.customer;
      }
      res.render("404", hbsObj);
    }
  });

  //   logout route
  app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
  });

  //   grabs id and places is it into object
  app.get("/:id", (req, res) => {
    const hbsObj = {};
    if (req.session.business) {
      hbsObj.business = req.session.business;
    } else if (req.session.customer) {
      hbsObj.customer = req.session.customer;
    }
    res.render("404", hbsObj);
  });
};
