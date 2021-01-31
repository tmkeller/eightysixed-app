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
                guests: jsonData,
                user: ( req.session.user || req.session.business ),

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
                    star_width: star_width,
                    user: ( req.session.user || req.session.business )
                }
                res.render( 'customer-profile', hbsObj );
            }
        }).catch( err => {
            res.status( 500 ).json( err );
        });
    });

    app.get("/business-main",function( req, res ) {
        if ( !req.session.business ) {
            res.status( 401 ).send( "You must log in first." );
            res.render( "/" );
        } else {
            const hbsObj = {
                user: ( req.session.user || req.session.business )
            }
            res.render('business-main', hbsObj);
        }
    });

    app.get( '/logout', ( req, res ) => {
        req.session.destroy();
        res.redirect( "/" );
    });

    // placeholder code to test with.
        // let vars = {
        //     logged_in: true,
        //     guests: [
        //         {
        //             first_name: "Joe",
        //             last_name: "Joesson",
        //             pic: "http://placekitten.com/300/300",
        //             top_comment: '"This kitten is cute, but he tore up my couch."'
        //         },
        //         {
        //             first_name: "Tim",
        //             last_name: "Timsson",
        //             pic: "http://placekitten.com/300/300",
        //             top_comment: '"Fuzzy and snuggly, but tried to tip me with a dead mouse."'
        //         },
        //         {
        //             first_name: "Jack",
        //             last_name: "Jacksson",
        //             pic: "http://placekitten.com/300/300",
        //             top_comment: '"Came in with muddy paws and refused to wear a mask."'
        //         }
        //     ]
        // }
        // console.log( vars );
}
