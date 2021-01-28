

module.exports = function(app){


    app.get( "/", function( req, res ) {
        res.render('index');
    })

    app.get("/sign-in",function( req, res ) {
        res.render('sign-in');
    })



}
