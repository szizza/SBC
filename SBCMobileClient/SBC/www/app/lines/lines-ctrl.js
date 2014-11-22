
(function () {
	'use strict';

		angular.module('SBCApp').controller('linesCtrl',['$ionicPopup','sbcservice',linesCtrl]);

		function linesCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();