'use strict';
require( './boot' )
	.then( function ( server ) {
		console.log('Server running at:', server.info.uri);
	} )
	.catch( function ( err ) {
		console.log( err );
	} );