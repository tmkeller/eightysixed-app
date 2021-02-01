const db = require("../models");

module.exports = function(app){

    app.get("/business-main/:id",function( req, res ) {
        db.Customer.findAll({
            where:{
                BusinessId: req.params.id
            }
        }).then(data=>{
            if ( !req.session.business ) {
                res.status( 401 ).send( "You must log in first." );
                res.render( "/" );
            } else {
                const jsonData = data.map(obj=> {return obj.toJSON()})
                const hbsObj = {
                    customers: jsonData,
                    user: ( req.session.user || req.session.business )
                }
                console.log(data)
    
                
                res.render('business-main', hbsObj);
            }
            
        })

    });




}