// create the controller and inject Angular's $scope
singlePageApp.controller('aboutCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'About Page!';
  console.log("About");
});
