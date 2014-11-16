
(function () {
	'use strict';

		angular.module('SBCApp').controller('accountCtrl',['$ionicPopup','sbcservice',accountCtrl]);

		function accountCtrl($ionicPopup,sbcservice) {
			var vm = this;	
			vm.userinfo=[];
			
			vm.addAccountuserinfo=addAccountuserinfo;

			activate();

			function activate(){
				console.log('activated Account control');
				
			}



			function addAccountuserinfo(){
				console.log('addAccountuserinfo clicked');
				console.log(vm.userinfo);

				return sbcservice.addnewUserAccount().then(function(data) {

					console.log("Add New user account returned",data );
                
                
            });


			}
		};


})();