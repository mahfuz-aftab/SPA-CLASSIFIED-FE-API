singlePageApp.controller('homeCtrl', function($scope, $http, $location) {

  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

  $scope.message = 'Home page!';
  console.log("Home");

  $scope.postData = function(obj) {

    $http({
      method: "POST",
      url: "",
      data: obj
      //headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function mySuccess(response) {
      console.log("success: ", response.data);
    }, function myError(response) {
      console.log("error: ", response.statusText);
    });
  };

  $scope.getData = function() {
    $scope.posts = [];
    console.log("Hello");
    $http({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      //data: data
    }).then(function mySuccess(response) {
      $scope.posts = response.data;
      console.log("success: ", response.data);
    }, function myError(response) {
      console.log("error: ", response.statusText);
    });
  };
});
