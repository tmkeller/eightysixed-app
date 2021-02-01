// requires the model folder

const { request } = require("express");
const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function (app) {
  // create route for adding to the table business in the db:
  app.post("/api/customer", (req, res) => {
    if ( !req.session.business ) {
      res.status( 401 ).send( "Not logged in" );
    } else {
      db.Customer.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
        state: req.body.state,
        zip5: req.body.zip5,
        email: req.body.email,
        password: req.body.password,
        pic: req.body.pic,
        BusinessId: req.body
      }).then( data => {
        res.json( data );
      }).catch((err) => {
        res.status(500);
        console.error(err);
      });
    }
  });

//   router.post( '/', ( req, res ) => {
//     if ( !req.session.user ) {
//         res.status( 401 ).send( "not logged in" );
//     } else {
//         db.Review.create({
//             title: req.body.title,
//             review: req.body.review,
//             score: req.body.score,
//             UserId: req.session.user.id
//         }).then( data => {
//             res.json( data );
//         }).catch( err => {
//             res.status( 500 ).json( err );
//         });
//     }
// })

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
    const data = await db.Customer.findall().catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

  app.get( "/api/customer/:id", async (req, res) => {
    const data = await db.Customer.findOne({
      where: {
        id: req.params.id
      }
    }).catch(( err ) => {
      res.status( 500 );
      console.error( err );
    });
    res.status( 200 ).json( data );
  })

  app.post("/api/customer/search", async (req, res) => {
    console.log(req.body);
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

  // update route for updating the info in the table Customer in the db: WIP
  app.put("/api/customer/:id", async (req, res) => {
    const data = await db.Customer.update(req.body, {
      where: { id: req.body.id },
    }).catch((err) => {
      res.status(500);
      console.error(err);
    });
    res.status(200).json(data);
  });

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
};
