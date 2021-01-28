

module.exports = function(app){


    app.get( "/", function( req, res ) {
        res.render('sign-up');
    })

    app.get("/sign-in",function( req, res ) {
        res.render('sign-in');
    })



}
