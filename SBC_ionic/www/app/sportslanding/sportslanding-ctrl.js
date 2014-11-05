
(function () {
	'use strict';

		angular.module('SBCApp').controller('sportslandingCtrl',['$ionicPopup','sbcservice',sportslandingCtrl]);

		function sportslandingCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();