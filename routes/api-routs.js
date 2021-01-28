

module.exports = function(app){


    app.get( "/", function( req, res ) {
        res.render('index');
    })

    app.get("/sign-up",function( req, res ) {
        res.render('sign-up');
    })



}
