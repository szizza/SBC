
(function () {
	'use strict';

		angular.module('SBCApp').controller('loginCtrl',['$ionicPopup','sbcservice',loginCtrl]);

		function loginCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();