
(function () {
	'use strict';

		angular.module('SBCApp').controller('loginCtrl',['$ionicPopup','sbcservice',loginCtrl]);

		function loginCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			vm.userinfo = {username : '', password : ''};
			vm.test = {username : '', password : ''};


			vm.authenticate = function() {
				console.log('authenticate called');
				authentication.authenticate(vm.userinfo.username, vm.userinfo.password,vm.test); 
				vm.test.username = 'test';
			};
	



			
		};


})();