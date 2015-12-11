// Set up animated background
( function () {

	// Get the canvas
	var canvas = document.getElementById( 'main-bg' );
	var ctx = canvas.getContext( '2d' );

	// Track rotation
	var r = Math.random() * 10;

	// Animation loop
	function step() {
		var w = canvas.clientWidth / 4;
		var h = canvas.clientHeight / 4;
		var bigger = w > h ? w * 1.25 : h * 1.25;
		var x = ( w / 2 ) + Math.sin( r ) * bigger;
		var y = ( h / 2 ) + Math.cos( r ) * bigger;

		var color = 255 - Math.sin( r * 4.5 ) * 22;
		color = color > 255 ? 255 : Math.round( color );

		var hue = Math.round( ( r * 100 ) % 360 );

		ctx.canvas.width = w;
		ctx.canvas.height = h;

		var gradient = ctx.createRadialGradient( x, y, bigger, x, y, 0 );
		gradient.addColorStop( 0, 'rgb(' + color + ',' + color + ',' + color + ')' );
		gradient.addColorStop( 1, 'hsl(' + hue + ',50%,65%)' );

		ctx.fillStyle = gradient;
		ctx.fillRect( 0, 0, w, h );

		r += 0.0015;

		// Next frame
		window.requestAnimationFrame( step );
	}

	// Start animation
	window.requestAnimationFrame( step );

} )();