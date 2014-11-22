/**
 * user login controller
 */
/*because AngularJS doesn't seem to provide templates/bindings to be used in javascript easily we need to create an export*/
app.controller("userlogin", function($scope, $http, authentication){
	
	var userlogin = this;
	$scope.userinfo = {username : '', password : ''};
	$scope.test = {username : '', password : ''};
	
	$scope.authenticate = function() {authentication.authenticate($scope.userinfo.username, $scope.userinfo.password); };
	
});
