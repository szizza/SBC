//SBC service

(function () {
	'use strict';

		angular.module('SBCApp').factory('sbcservice', ['$http','$q','$ionicLoading','$timeout','model',sbcservice]);

		function sbcservice($http,$q,$ionicLoading,$timeout,model) {			

			 
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

	        function getHistory(user){

	        	$ionicLoading.show({ template : 'Loading...'});


		        	var history = [
	                {date: '12/12/2014', book: 'Stations', wager: 'new England -7', amount: 10, outcome: 'lost', winnings: '$0.00'},
	                {date: '12/13/2014', book: 'MGM', wager: 'new England -8', amount: 100, outcome: 'lost', winnings: '$0.00'},
	                {date: '12/14/2014', book: 'Stations', wager: 'new England -11', amount: 30, outcome: 'lost', winnings: '$0.00'},
	                {date: '12/15/2014', book: 'MGM', wager: 'new England -9', amount: 40, outcome: 'lost', winnings: '$0.00'},
	                {date: '12/16/2014', book: 'Stations', wager: 'new England -10', amount: 90, outcome: 'win', winnings: '$0.00'}
	            
	                            
	            ];

	            $timeout(function(){
							$ionicLoading.hide();
						}, 1000);


	            return $q.when(history);


	        }

	        function addnewUserAccount(user){

	        	$ionicLoading.show({ template : 'Loading...'});

	        	$timeout(function(){
							$ionicLoading.hide();
						}, 1000);
	                
	            



	        	return $q.when('success');

	        }

			
			return {
				getData: getData,	
				authenticate:authenticate,
				getHistory:getHistory,
				addnewUserAccount:addnewUserAccount

			};

		};
})();