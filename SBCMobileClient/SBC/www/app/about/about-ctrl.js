
(function () {
	'use strict';

		angular.module('SBCApp').controller('aboutCtrl',['$ionicPopup','sbcservice',aboutCtrl]);

		function aboutCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			// var vm.AppTitle = "Sports Book Combine";
			// var vm.AppVersion = "Version 0.0.1";
			// var vm.ContactInfoemail = "info@sbc.com";
			// var vm.Contactwebsite = "http://www.sbcsports.com";

			activate();

			function activate(){
				console.log('activated About control');
				
			}



		};


})();