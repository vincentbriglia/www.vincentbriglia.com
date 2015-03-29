import angular from 'angular';
import 'angular-material';
import 'angular-messages';
import 'angular-ui-router';
import 'angular-ui-router-extras';
import 'lodash';
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
	// Configure a dark theme with primary foreground yellow
	$mdThemingProvider.definePalette('amazingPaletteName', {
		'50': 'ffebee',
		'100': 'ffcdd2',
		'200': 'ef9a9a',
		'300': 'e57373',
		'400': 'ef5350',
		'500': 'f44336',
		'600': 'e53935',
		'700': 'd32f2f',
		'800': 'c62828',
		'900': 'b71c1c',
		'A100': 'ff8a80',
		'A200': 'ff5252',
		'A400': 'ff1744',
		'A700': 'd50000',
		'contrastDefaultColor': 'light', // whether, by default, text (contrast)
		// on this palette should be dark or light
		'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
			'200', '300', '400', 'A100'
		],
		'contrastLightColors': undefined // could also specify this if default was 'dark'
	});
	$mdThemingProvider.theme('default')
		.primaryPalette('amazingPaletteName')
}]);