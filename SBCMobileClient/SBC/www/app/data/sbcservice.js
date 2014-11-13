//SBC service

(function () {
	'use strict';

		angular.module('SBCApp').factory('sbcservice', ['$http','$q','$ionicLoading','$timeout',sbcservice]);

		function sbcservice($http,$q,$ionicLoading,$timeout) {			

			 
			 // Data
			 
			

			
			//Methods
			function getData(){
				console.log("getData called...");				
			};

			function authenticate (username, password, response) {
		    	$http.post('/rest/rpc/authenticate', 'username='+username+'&'+'password='+password).success(
		                function( data, status, headers, config) {
		                	response = data;
		                    console.log(response.username + ' ' + status + ' ' + headers);

		                }).error(function( data, status, headers, config){
		                	console.log('authentication error - status code: ' + status);
		    			
		    			});
		            console.log('username ' + username);
	        };

			
			return {
				getData: getData,	
				authenticate:authenticate

			};

		};
})();