/**
 * application module - global
 */
var app = angular.module('sbcApp', ['ionic'])
.directive('sbcApp',['$window', '$document', 
    function($window, $document) {
		return function(scope, element, attr)
		{
	
			
		};
}]) //below is the boilplate code for ionic
.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			// Set the statusbar to use the default style, tweak this to
			// remove the status bar on iOS or change it to use white instead of dark colors.
			StatusBar.styleDefault();
		}
	});
});

