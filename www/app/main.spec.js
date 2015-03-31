import 'angular';
import 'angular-mocks';
import {
  mainModule
}
from '../app/main';

describe('HomeController', function () {
  beforeEach(angular.mock.module(mainModule.name));

  var $controller;

  beforeEach(angular.mock.inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('user should not be empty', function () {
    var scope = {};
    var controller = $controller('HomeController', {
      $scope: scope
    });
    expect(scope.user).to.not.be.empty();
    expect(scope.user).to.have.property('title');
  });
});