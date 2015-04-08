import 'angular';
import 'angular-mocks';
import {
  mainModule
}
from './main';

describe('HomeController', function () {
  beforeEach(angular.mock.module(mainModule.name));

  var $controller;

  beforeEach(angular.mock.inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('user should not be empty', function () {
    var scope = {},
      controller;

    controller = $controller('HomeController', {
        $scope: scope
      });

    should.exist(scope.user);
    expect(scope.user.title).to.equal('Developer');

  });
});
