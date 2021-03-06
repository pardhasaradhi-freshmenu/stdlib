'use strict';

// MODULES //

var tape = require( 'tape' );
var standardize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof standardize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			standardize( value );
		};
	}
});

tape( 'the function throws an error if not provided an object (provided keys)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			standardize( value, ['beep','boop'] );
		};
	}
});

tape( 'the function throws an error if provided a `keys` argument which is not an array of strings', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		['5',null],
		['5',5],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			standardize( {}, value );
		};
	}
});

tape( 'the function returns an empty object if provided an empty object', function test( t ) {
	var out = standardize( {} );
	t.deepEqual( out, {}, 'returns an empty object' );
	t.end();
});

tape( 'the function standardizes a `package.json`', function test( t ) {
	var expected;
	var actual;
	var pkg;

	pkg = {
		'license': 'MIT',
		'name': 'beep'
	};
	expected = '{"name":"beep","license":"MIT"}';
	actual = standardize( pkg );

	t.notEqual( JSON.stringify( pkg ), expected, 'original `package.json` is not standardized' );
	t.strictEqual( JSON.stringify( actual ), expected, 'returns a standardized `package.json`' );
	t.end();
});

tape( 'the function supports specifying a key order', function test( t ) {
	var expected;
	var actual;
	var keys;
	var pkg;

	pkg = {
		'c': 'beep',
		'b': 'boop',
		'a': 'bop'
	};
	keys = [ 'b', 'a', 'c' ];
	expected = '{"b":"boop","a":"bop","c":"beep"}';
	actual = standardize( pkg, keys );

	t.notEqual( JSON.stringify( pkg ), expected, 'original `package.json` is not standardized' );
	t.strictEqual( JSON.stringify( actual ), expected, 'returns a standardized `package.json`' );

	t.end();
});
