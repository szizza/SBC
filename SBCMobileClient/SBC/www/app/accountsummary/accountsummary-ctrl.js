
(function () {
	'use strict';

		angular.module('SBCApp').controller('accountsummaryCtrl',['$ionicPopup','sbcservice',accountsummaryCtrl]);

		function accountsummaryCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();