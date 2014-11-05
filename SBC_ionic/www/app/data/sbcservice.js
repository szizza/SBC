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

			
			return {
				getData: getData,	

			};

		};
})();