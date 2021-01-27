const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 8080;

app.use( express.urlencoded( { extended: true } ));
app.use( express.json() );

app.use( express.static( 'public' ));

app.get( "/", function( req, res ) {
    console.log( "Hey look, I'm working!" );
})

app.listen( PORT, function() {
    console.log( 'App listening on PORT ' + PORT );
})