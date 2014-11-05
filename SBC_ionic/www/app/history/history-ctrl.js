
(function () {
	'use strict';

		angular.module('SBCApp').controller('historyCtrl',['$ionicPopup','sbcservice',historyCtrl]);

		function historyCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();