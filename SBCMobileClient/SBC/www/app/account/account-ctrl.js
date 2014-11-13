
(function () {
	'use strict';

		angular.module('SBCApp').controller('accountCtrl',['$ionicPopup','sbcservice',accountCtrl]);

		function accountCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();