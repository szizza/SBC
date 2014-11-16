
(function () {
	'use strict';

		angular.module('SBCApp').controller('historyCtrl',['$ionicPopup','$q','sbcservice',historyCtrl]);

		function historyCtrl($ionicPopup,$q,sbcservice) {
			var vm = this;	
			var WagersHistory =[];

			activate();

			function activate(){
				var promises = [getAccountHistory()];

				return $q.all(promises).then(function(){
					console.log('activated history view');

				});
			}

			function getAccountHistory() {
	            return sbcservice.getHistory().then(function(data) {
	                vm.WagersHistory = data;
	                return vm.WagersHistory;
	            });
        	}


        function LoadMoreWagers() {
            // return sbcservice.getHistory().then(function(data) {
            //     vm.WagersHistory = data;
            //     return vm.WagersHistory;
        }

			
		};


})();