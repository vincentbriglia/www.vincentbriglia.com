import 'angular';
import 'angular-material';
import _ from 'lodash/lodash';
import '../assets/stylesheets/style.css!';

export let mainModule = angular.module('vb', [
  'ngMaterial',
  'ngAnimate'
]);

mainModule.controller('HomeController', ['$scope', function ($scope) {

}]);

mainModule.config(['$mdThemingProvider', function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('indigo')
  .accentPalette('orange');
}]);
