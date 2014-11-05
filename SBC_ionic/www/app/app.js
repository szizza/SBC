angular.module("SBCApp",["ionic"])


.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {

		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}

		if(window.StatusBar) {
			StatusBar.styleDefault();
		}

		
		
	});
})


.config(function($stateProvider, $urlRouterProvider,$httpProvider) {





	$stateProvider

		.state('home', {			
			url : "/home",
			templateUrl: "app/home/home.html"
		})		

		.state('app', {
		abstract: true,				
			url: "/app",
			templateUrl: "app/layout/menu-layout.html"

		})

		.state('app.about', {			
			url : "/about",
			views: {
				"mainContent" : {
					templateUrl: "app/about/about.html"
				}
			}			
		})


		.state('app.account', {			
			url : "/account",
			views: {
				"mainContent" : {
					templateUrl: "app/account/account.html"
				}
			}			
		})



		.state('app.accountsummary', {			
			url : "/accountsummary",
			views: {
				"mainContent" : {
					templateUrl: "app/accountsummary/accountsummary.html"
				}
			}			
		})


			.state('app.history', {			
			url : "/history",
			views: {
				"mainContent" : {
					templateUrl: "app/history/history.html"
				}
			}			
		})




		.state('app.lines', {			
			url : "/lines",
			views: {
				"mainContent" : {
					templateUrl: "app/lines/lines.html"
				}
			}			
		})

		.state('app.login', {			
			url : "/login",
			views: {
				"mainContent" : {
					templateUrl: "app/login/login.html"
				}
			}			
		})

		.state('app.msgcenter', {			
			url : "/msgcenter",
			views: {
				"mainContent" : {
					templateUrl: "app/msgcenter/msgcenter.html"
				}
			}			
		})

		.state('app.settings', {			
			url : "/settings",
			views: {
				"mainContent" : {
					templateUrl: "app/settings/settings.html"
				}
			}			
		})

		.state('app.sportslanding', {			
			url : "/sportslanding",
			views: {
				"mainContent" : {
					templateUrl: "app/sportslanding/sportslanding.html"
				}
			}			
		});

		



		$urlRouterProvider.otherwise('/app/login');

});