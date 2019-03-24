// create the controller and inject Angular's $scope
	singlePageApp.controller('contactCtrl', function($scope) {
	    // create a message to display in our view
	    $scope.message = 'Contact Page!';
	    console.log("Contact");
	});