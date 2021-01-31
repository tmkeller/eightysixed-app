const db = require("../models");

module.exports = function(app){

    app.get( "/", function( req, res ) {
        db.Customer.findAll().then( data => {
            const jsonData = data.map( obj => obj.toJSON());
            const hbsObj = {
                guests: jsonData,
                user: ( req.session.user || req.session.business )
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

    app.get("/customer-profile",function( req, res ) {
        const hbsObj = {
            user: ( req.session.user || req.session.business )
        }
        res.render('customer-profile', hbsObj);
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
