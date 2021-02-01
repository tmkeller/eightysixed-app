const db = require("../models");

module.exports = function(app){

    app.get("/business-main/:id", async function( req, res ) {
        if ( !req.session.business ) {
            res.status( 401 ).send( "You must log in first." );
            res.render( "/" );
        } else {
            const customers = await db.Customer.findAll({
                where:{
                    BusinessId: req.params.id
                }
            }).catch( err => {
                res.status( 500 ).json( err );
            });
            const business = await db.Business.findOne({
                where: {
                    id: req.params.id
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
};