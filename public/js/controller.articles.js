angular.module( 'endain.io' ).controller( 'articles', [ '$scope', '$timeout', function ( $scope, $timeout ) {
	// Default to empty
	$scope.articles = [];

	// Defer until page animation is done
	$timeout( function () {
		$scope.articles = [ {
			'title': 'Spatial Querying Basics',
			'link': 'http://dotgaming.net/dev/spatial_querying',
			'image': 'articles_spatial_querying.png'
		} ];
	}, 1000 );
} ] );