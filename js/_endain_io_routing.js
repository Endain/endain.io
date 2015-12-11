angular.module( 'endain.io' ).config( [ '$locationProvider', '$routeProvider', '$sceProvider', function ( $locationProvider, $routeProvider, $sceProvider ) {
	// Set HTML5 mode
	$locationProvider.html5Mode( true );

	// Turn off SCE
	//$sceProvider.enabled( false );

	// Configure possible view routes
	$routeProvider
		.when( '/about', {
			templateUrl: 'partials/about.html',
			controller: null
		} )
		.when( '/resume', {
			templateUrl: 'partials/resume.html',
			controller: null
		} )
		.when( '/articles', {
			templateUrl: 'partials/articles.html',
			controller: 'articles'
		} )
		.when( '/experiments', {
			templateUrl: 'partials/experiments.html',
			controller: 'experiments'
		} )
		.when( '/contact', {
			templateUrl: 'partials/contact.html',
			controller: null
		} )
		.otherwise( {
			redirectTo: '/about'
		} );
} ] );