'use strict';

var Hapi    = require( 'hapi' );
var Promise = require( 'bluebird' );
var equal   = require( 'deep-equal' );

var server = new Hapi.Server();

server.connection( {
    host: 'localhost',
    port: 8000
} );

server.route( {
	method: 'PUT',
    path:'/templates/{templateName}',
    handler: function ( request, reply ) {
        var templateJSON = request.payload;
        var templateName = request.params.templateName;
        var templateComparison = getTemplateComparison( templateName );

    	reply(equal( templateJSON, templateComparison) );
    }
},
{
	method: 'GET'
	path:
	handler:
} );

function getTemplateComparison( templateName ) {
	var result = require( './json-files/' + templateName);
	return result;
}

module.exports = new Promise( function ( resolve, reject ) {
	server.start( function ( err ) {
		if ( err ) {
			return reject( err );
		}
		resolve( server );
	} );
} );