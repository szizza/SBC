
(function () {
	'use strict';
	
angular.module('SBCApp').factory('model', [model]);

function model(){

	

	function newuserinfo(username,Password,confrimPassword,Email,confirmEmail,Zipcode,Securityquestion,SecurityAnswer){
		var newuserinfo={
			username:username,
			Password:Password,
			confrimPassword:confrimPassword,
			Email:Email,
			confirmEmail:confirmEmail,
			Zipcode:Zipcode,
			Securityquestion:Securityquestion, 
			SecurityAnswer:SecurityAnswer
		};
		return newuserinfo;

	}

	function wagerdetail(date,book,wager,amount,outcome,winnings){
		var wagerdetail={
			date:date,
			book:book,
			wager:wager,
			amount:amount,
			outcome:outcome,
			winnings:winnings
		};
		return wagerdetail;

	}

	return {
		newuserinfo:newuserinfo,
		wagerdetail:wagerdetail

	};
	



};
})();
