# Test Coverage

> [tape][tape] test runner for [Istanbul][istanbul] instrumented source code.


<section class="usage">

## Usage

``` javascript
var runner = require( '@stdlib/tools/test-cov/tape-istanbul' );
```

#### runner( pattern, \[options,\] clbk )

Runs [tape][tape] tests for [Istanbul][istanbul] instrumented source code.

``` javascript
runner( 'test*.js', done );

function done( error, coverage ) {
    if ( error ) {
        throw error;
    }
    console.log( JSON.stringify( coverage ) );
}
```

The function accepts the following `options`:

* __global__: global variable containing coverage information. Default: `__coverage__`.
* __dir__: root directory from which to search for files. May be either a relative or absolute directory path. Relative paths are resolved relative to the current working directory.

By default, the function looks for coverage information in a `__coverage__` global variable. To specify an alternative variable, set the `global` option.

``` javascript
var opts = {
    'global': '$$coverage$$'
};

runner( pattern, opts, done );
```

</section>

<!-- /.usage -->


<section class="examples">

## Examples

``` javascript
var runner = require( '@stdlib/tools/test-cov/tape-istanbul' );

var pattern;
var opts;

function done( error, coverage ) {
    if ( error ) {
        throw error;
    }
    console.log( JSON.stringify( coverage ) );
}

pattern = __dirname+'/fixtures/**/test*.js';

opts = {
    'dir': __dirname
};

runner( pattern, opts, done );
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: stdlib-tape-istanbul [options] <pattern>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dirname         Root directory from which to search.
         --global variable     Global variable containing coverage information.
         --output filepath     Output filepath for coverage information.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

``` bash
$ stdlib-tape-istanbul 'test*.js'
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul

</section>

<!-- /.links -->
