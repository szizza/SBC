
(function () {
	'use strict';

		angular.module('SBCApp').controller('aboutCtrl',['$ionicPopup','sbcservice',aboutCtrl]);

		function aboutCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();