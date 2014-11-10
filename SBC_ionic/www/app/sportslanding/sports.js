
(function () {
	'use strict';

		angular.module('SBCApp').controller('sportsCtrl',['$ionicPopup','sbcservice',sportsCtrl]);

		function sportsCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();