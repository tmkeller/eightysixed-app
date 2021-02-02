
const db = require("../models");

module.exports = function(app){

    app.get( "/", function( req, res ) {
        db.Customer.findAll().then( data => {
            const jsonData = data.map( ( obj ) => {
                obj.avg_rating = 4.6; // This is test code. Delete it when we can get average ratings.
                obj.dataValues.star_width = Math.floor((obj.avg_rating/5) * 187) + "px";
                return obj.toJSON();
            });
            const hbsObj = {
                guests: jsonData
            }
            if ( req.session.business ) {
                hbsObj.business = req.session.business;
            } else if ( req.session.customer ) {
                hbsObj.customer = req.session.customer;
            }
            res.render('index', hbsObj );
        })
    })

    app.get( "/401", function( req, res ) {
        res.render( "401" );
    })

    // Commenting this out because we're doing sign-ups from the nav bar dropdown.
    // app.get("/sign-up",function( req, res ) {
    //     const hbsObj = {
    //         user: ( req.session.user || req.session.business )
    //     }
    //     res.render('sign-up', hbsObj);
    // });

    app.get("/customer-profile/:id", async function( req, res ) {
        const customer = await db.Customer.findOne({
            where:{
                id: req.params.id
            },
            include: [db.Review]
        }).catch( err => {
            res.status( 500 ).json( err );
        });

        let business;
        if ( req.session.business ) {
            business = await db.Business.findOne({
                where: {
                    id: req.session.business.id
                }
            }).catch( err => {
                res.status( 500 ).json( err );
            });
        }
        
        if ( !customer ) {
            // The following code should be replaced with an actual 404 page.
            res.status( 404 ).send( "no such user" );
        } else {
            const reviews = customer.Reviews.map( ( obj )=>{ return obj.toJSON()})
            const reversedReviews = reviews.reverse()
            const hbsObj = {
                id: customer.dataValues.id,
                first_name: customer.dataValues.first_name,
                last_name: customer.dataValues.last_name,
                city: customer.dataValues.city,
                state: customer.dataValues.state,
                zip: customer.dataValues.zip5,
                email: customer.dataValues.email,
                password: customer.dataValues.password,
                pic: customer.dataValues.pic,
                createdAt: customer.dataValues.updatedAt,
                updatedAt: customer.dataValues.createdAt,
                reviews: reversedReviews,
            }
            if ( business ) {
                hbsObj.businessData = business.toJSON()
            }
            if ( req.session.business ) {
                hbsObj.business = req.session.business;
            } else if ( req.session.customer ) {
                hbsObj.customer = req.session.customer;
            }
            console.log( business );
            res.render( 'customer-profile', hbsObj );
        }
    })

    app.get("/business-main", async function( req, res ) {
        if ( !req.session.business ) {
            res.redirect( "/401" );
        } else {
            const customers = await db.Customer.findAll({
                where:{
                    BusinessId: req.session.business.id
                }
            }).catch( err => {
                res.status( 500 ).json( err );
            });
            const business = await db.Business.findOne({
                where: {
                    id: req.session.business.id
                }
            }).catch( err => {
                res.status( 500 ).json( err );
            });

            const jsonData = customers.map(( obj ) => {
                let newObj = obj.toJSON();
                // Placeholder code for the star width.
                newObj.star_width = Math.floor((3/5) * 187) + "px";
                return newObj;
            });
            const hbsObj = await {
                businessData: business.toJSON(),
                customers: jsonData,
                // This is necessary any time you're rendering a page
                // where the user should be logged in. Looks like this for customers:
                // customer: req.session.customer
                business: req.session.business
            };
            if ( hbsObj.businessData.state ) {
                const state = hbsObj.businessData.state.replace( / /g, "");
                hbsObj.businessData[state] = true;
            }
            console.log( "hbsObj", hbsObj );
            res.render('business-main', hbsObj);
        }
    });

    app.get( '/logout', ( req, res ) => {
        req.session.destroy();
        res.redirect( "/" );
    });

    app.get( '/:id', ( req, res ) => {
        const hbsObj = {};
        if ( req.session.business ) {
            hbsObj.business = req.session.business;
        } else if ( req.session.customer ) {
            hbsObj.customer = req.session.customer;
        }
        res.render( "index", hbsObj );
    })
}
