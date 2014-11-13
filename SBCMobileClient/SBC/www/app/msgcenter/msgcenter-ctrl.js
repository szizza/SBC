
(function () {
	'use strict';

		angular.module('SBCApp').controller('msgcenterCtrl',['$ionicPopup','sbcservice',msgcenterCtrl]);

		function msgcenterCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			var data = sbcservice.getData();	
			vm.detail = data;
		};


})();