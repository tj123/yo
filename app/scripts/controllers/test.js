'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp').controller('TestCtrl', ['$scope',function (sp) {

	console.log(this);

	console.log(angular.module('yoApp'));

	sp.hehe = '我就呵呵了';
	sp.aa = 'wefawefae';
	sp.count = 0;
	sp.test = {};
	sp.run = function (d) {
		console.log(d);
	}

	sp.alert = function () {
		this.count ++;
	}
}]);
