import 'angular';
import 'angular-material';
import 'angular-messages';
import 'angular-ui-router';
import 'angular-ui-router-extras';
import _ from 'lodash/lodash';
import 'restangular';
import './style.css!';

export let mainModule = angular.module('vb', [
	'ngMaterial',
	'ngMessages',
	'restangular',
	'ui.router'
	// 'ct.ui.router.extras'
]);

mainModule.controller('HomeController', ['$scope', function ($scope) {
	$scope.user = {
		title: 'Developer',
		email: 'ipsum@lorem.com',
		firstName: '',
		lastName: '',
		company: 'Google',
		address: '1600 Amphitheatre Pkwy',
		city: 'Mountain View',
		state: 'CA',
		biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
		postalCode: '94043'
	};
}]);

mainModule.config(['$mdThemingProvider', function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('green')
		.accentPalette('orange');

}]);