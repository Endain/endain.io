angular.module( 'endain.io' ).controller( 'experiments', [ '$scope', '$timeout', function ( $scope, $timeout ) {
	// Default to empty
	$scope.experiments = [];

	// Defer until page animation is done
	$timeout( function () {
		$scope.experiments = [ {
			'title': 'Bezier Curves (Canvas)',
			'link': 'http://dotgaming.net/lines.html',
			'image': 'experiments_bezier_curve.png'
		}, {
			'title': 'Springy Dots (Canvas)',
			'link': 'http://dotgaming.net/jiggle.html',
			'image': 'experiments_springy_dots.png'
		}, {
			'title': 'Fireworks (Canvas)',
			'link': 'http://dotgaming.net/dev/fireworks',
			'image': 'experiments_fireworks.png'
		}, {
			'title': 'Colorful Polygons (Canvas)',
			'link': 'http://dotgaming.net/dev/polygons',
			'image': 'experiments_polygons_canvas.png'
		}, {
			'title': 'Colorful Polygons (webGL)',
			'link': 'http://dotgaming.net/dev/polygons_webgl',
			'image': 'experiments_polygons_webgl.png'
		} ];
	}, 1000 );
} ] );