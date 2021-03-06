'use strict';

// MODULES //

var Ajv = require( 'ajv' );
var schema = require( './../../schema' );


// MAIN //

/**
* Returns a function to validate `package.json`.
*
* @private
* @returns {Function} validation function
*
* @example
* var isValid = validator();
*/
function validator() {
	var opts;
	var ajv;

	opts = {};

	// Collect all errors:
	opts.allErrors = true;

	// Include the schema reference and invalid data in error output:
	opts.verbose = true;

	// Perform "full" validation:
	opts.format = 'full';

	// Create a new `Ajv` instance and compile the schema:
	ajv = new Ajv( opts );
	return ajv.compile( schema() );
} // end FUNCTION validator()


// EXPORTS //

module.exports = validator();
