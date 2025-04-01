var randn = require( '@stdlib/random/base/box-muller' );
var Float64Array = require( '@stdlib/array/float64' );
var now = require( '@stdlib/time/now' );
var plot = require( '@stdlib/plot' );

var t;
var x;
var y;
var i;

// Create some data...
t = now() * 1000;
x = new Float64Array( 100 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = t + (i*360000);
    y[ i ] = 50.0 + (10.0*randn());
}

// Create a new plot:
var plt = plot( [x], [y], {
    'width': 600,
    'height': 480,
    'xScale': 'time',
    'xTickFormat': '%H:%M',
    'renderFormat': 'html'
});

// Render as a virtual DOM tree:
var vtree = plt.render( 'vdom' );
console.log( JSON.stringify( vtree ) );

// Render as HTML:
var html = plt.render();
console.log( html );

// Listen for 'render' events (e.g., when triggered due to changes in state):
plt.on( 'render', onRender );

setTimeout( update, 1000 );

function update() {
    plt.width = 720;
}

function onRender( html ) {
    console.log( html );
}