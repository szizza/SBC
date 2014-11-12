/**
 * New node file
 */
/*because AngularJS doesn't seem to provide templates/bindings to be used in javascript easily we need to create an export*/
app.controller("userlogin", function($scope, $http){
	
	$scope.data = {value1 : true, value2: false, value3: true, value4: false};
	$scope.check = true;
});
