'use strict';

/**
 * @ngdoc function
 * @name vsaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vsaWebApp
 */
angular.module('vsaWebApp')
  .controller('MainCtrl', function ($scope ,data) {
    $scope.output = data.getResult().plans;
    $scope.role = 'Student';
    $scope.deleteCourse = function(planName, quarterName, index){
    	$scope.output[planName][quarterName]["coursesSuggested"].splice(index, 1);
    };

    $scope.changeRole = function(value){
        $scope.role = value;
        console.log(value);
    };

  });
