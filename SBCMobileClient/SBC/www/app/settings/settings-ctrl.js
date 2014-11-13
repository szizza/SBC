
(function () {
	'use strict';

		angular.module('SBCApp').controller('settingsCtrl',['$ionicPopup','sbcservice',settingsCtrl]);

		function settingsCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();