const db = require("../models");

module.exports = function(app){

    app.get( "/", function( req, res ) {
        db.Customer.findAll().then( data => {
            const jsonData = data.map( obj => obj.toJSON());
            const hbsObj = {
                guests: jsonData
            }
            console.log( data );
            res.render('index', hbsObj );
        })
    })

    app.get("/sign-up",function( req, res ) {
        res.render('sign-up');
    });

    app.get("/customer-profile",function( req, res ) {
        res.render('customer-profile');
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
