// requires db models
const db = require("../models");

module.exports = function (app) {
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
      let newObj = obj.toJSON();
      // Placeholder code for the star width.
      newObj.star_width = Math.floor((3 / 5) * 187) + "px";
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
      res.render("business-main", hbsObj);
    } else {
      // Gonna replace this with a 404 page.
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
};
