var express = require( 'express' );
var app = express();

var options = {
	root: __dirname + '/public/',
	dotfiles: 'deny',
	headers: {
		'x-timestamp': Date.now(),
		'x-sent': true
	}
};

app.get( '/js/:file', function ( req, res ) {
	res.sendFile( 'js/' + req.params.file, options );
} );

app.get( '/css/:file', function ( req, res ) {
	res.sendFile( 'css/' + req.params.file, options );
} );

app.get( '/img/:file', function ( req, res ) {
	res.sendFile( 'img/' + req.params.file, options );
} );

app.get( '/partials/:file', function ( req, res ) {
	res.sendFile( 'partials/' + req.params.file, options );
} );

app.get( '/', function ( req, res ) {
	res.sendFile( 'index.html', options );
} );
app.get( '/about', function ( req, res ) {
	res.sendFile( 'index.html', options );
} );
app.get( '/resume', function ( req, res ) {
	res.sendFile( 'index.html', options );
} );
app.get( '/articles', function ( req, res ) {
	res.sendFile( 'index.html', options );
} );
app.get( '/experiments', function ( req, res ) {
	res.sendFile( 'index.html', options );
} );
app.get( '/contact', function ( req, res ) {
	res.sendFile( 'index.html', options );
} );

// Expose web server as module
exports.app = app;