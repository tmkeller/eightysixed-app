

module.exports = function(app){


    app.get( "/", function( req, res ) {
        // const vars = { logged_in: true };
        res.render('index', vars );
    })

    app.get("/sign-up",function( req, res ) {
        res.render('sign-up');
    })



}
