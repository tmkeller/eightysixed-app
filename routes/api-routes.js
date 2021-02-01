const db = require("../models");

module.exports = function(app){

    app.get( "/", function( req, res ) {
        db.Customer.findAll().then( data => {
            const jsonData = data.map( ( obj ) => {
                obj.avg_rating = 4.6; // This is test code. Delete it when we can get average ratings.
                obj.dataValues.star_width = Math.floor((obj.avg_rating/5) * 187) + "px";
                console.log( obj );
                return obj.toJSON();
            });
            console.log( jsonData );
            const hbsObj = {
                guests: jsonData
            }
            if ( req.session.customer ) {
                hbsObj.customer = req.session.customer;
            } else if (req.session.business ) {
                hbsObj.business = req.session.business;
            }
            console.log( hbsObj );
            res.render('index', hbsObj );
        })
    })

    // Commenting this out because we're doing sign-ups from the nav bar dropdown.
    // app.get("/sign-up",function( req, res ) {
    //     const hbsObj = {
    //         user: ( req.session.user || req.session.business )
    //     }
    //     res.render('sign-up', hbsObj);
    // });

    app.get("/customer-profile/:id",function( req, res ) {
        db.Customer.findOne( {
            where: {
                id: req.params.id
            }
        }).then( userData => {
            if ( !userData ) {
                res.status( 404 ).send( "no such user" );
            } else {
                // These reviews are test code. Delete them when we can get the reviews.
                const reviews = [
                    {
                        business: "Red Mill Burgers",
                        rating: 1.2,
                        text: "I heard he hates children."
                    },
                    {
                        business: "Canlis",
                        rating: 2.1,
                        text: "Tips well but bit a guy once."
                    },
                    {
                        business: "Mr. Gyros",
                        rating: 1.8,
                        text: "Smells bad, but low-maintenance."
                    }
                ];
                let sum = 0;
                let num = 0;
                for ( let i = 0; i < reviews.length; i++ ) {
                    console.log( reviews[ i ].rating );
                    sum += reviews[ i ].rating;
                    num++;
                }
                let star_width = Math.floor((sum/num/5) * 187) + "px";
                console.log( sum/num );
                const hbsObj = {
                    id: userData.dataValues.id,
                    first_name: userData.dataValues.first_name,
                    last_name: userData.dataValues.last_name,
                    city: userData.dataValues.city,
                    state: userData.dataValues.state,
                    zip: userData.dataValues.zip5,
                    email: userData.dataValues.email,
                    password: userData.dataValues.password,
                    pic: userData.dataValues.pic,
                    createdAt: userData.dataValues.updatedAt,
                    updatedAt: userData.dataValues.createdAt,
                    reviews: reviews,
                    star_width: star_width
                }
                res.render( 'customer-profile', hbsObj );
            }
        }).catch( err => {
            res.status( 500 ).json( err );
        });
    });

    app.get("/business-main",function( req, res ) {
        if ( !req.session.business ) {
            res.redirect( "/" );
        } else {
            const hbsObj = {}; // empty object, in case we want to add something to it.
            if ( req.session.customer ) {
                hbsObj.customer = req.session.customer;
            } else if (req.session.business ) {
                hbsObj.business = req.session.business;
            }
            res.render('business-main', hbsObj);
        }
    });

    app.get( '/logout', ( req, res ) => {
        req.session.destroy();
        res.redirect( "/" );
    });

    app.get( '/:id', ( req, res ) => {
        res.redirect( "/" );
    })
}
