	var singlePageApp = angular.module('singlePageApp', ['ngRoute']);

	// configure our routes
	singlePageApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

	  $locationProvider.html5Mode(true);
	  $locationProvider.hashPrefix = '!';

	  $routeProvider

	    // route for the home page
	    .when('/', {
	      templateUrl: 'templates/home.html',
	      controller: 'homeCtrl'
	    })

	    // route for the about page
	    .when('/about', {
	      templateUrl: 'templates/about.html',
	      controller: 'aboutCtrl'
	    })

	    // route for the contact page
	    .when('/contact', {
	      templateUrl: 'templates/contact.html',
	      controller: 'contactCtrl'
	    })

	    .otherwise({
	      redirectTo: '/'
	    });
	}]);
