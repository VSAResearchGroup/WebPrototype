'use strict';

/**
 * @ngdoc function
 * @name vsaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vsaWebApp
 */
angular.module('vsaWebApp')
  .controller('MainCtrl', function ($scope , $http, data) {
    // $scope.output = data.getResult().plans;
    $scope.schools = data.getSchoolNames();
    $scope.school = $scope.schools[0];
    $scope.majors = data.getMajors();
    $scope.major = $scope.majors[0];
    var plans = data.getPlans();
    $scope.schoolPlans = plans[$scope.school.id][$scope.major.id];

    $scope.electiveCourses = {};
    $scope.courseInputs = {
        2017: {
            Fall:[],
            Spring:[],
            Summer:[],
            Winter:[]
        }
    };
    $scope.deleteCourse = function(targetObj, year, quarterName, index){
        targetObj[year][quarterName].splice(index, 1);
    	//$scope.output[planName][quarterName]["coursesSuggested"].splice(index, 1);
    };

    $scope.changeSchool = function(value){
        $scope.school = value;
        $scope.schoolPlans = plans[$scope.school.id][$scope.major.id];
        getPlans($scope.schoolPlans, 0);
        // console.log($scope.schoolPlans);
    };
    $scope.changeMajor = function(value){
        $scope.major = value;
        $scope.schoolPlans = plans[$scope.school.id][$scope.major.id];
        getPlans($scope.schoolPlans, 0);
        // console.log($scope.schoolPlans);
    };

    $scope.addCourse = function(year, quarter, value){
        if(value == "" || value == undefined) {return;}
        if($scope.electiveCourses[year] == undefined) {
             $scope.electiveCourses[year] = {};
        }
        if( $scope.electiveCourses[year][quarter] == undefined) {
             $scope.electiveCourses[year][quarter] = [];
        }

         $scope.electiveCourses[year][quarter].push(value);
    }

    /**
        Transform API result to
        {
            2016: {
                Fall:[course1, course2],
                Spring:[],
                Summer:[],
                Winter:[]
            },
            2017:{...}
        }
    **/
    var transformApi = function(result){
        var output = {};
        for (var i =0; i < result.length; i++) {
            var planElement = result[i];
            if(output[planElement.year] == undefined) {
                output[planElement.year] = {};
            }
            if(output[planElement.year][planElement.quarter] == undefined) {
                output[planElement.year][planElement.quarter] = [];
            }

            output[planElement.year][planElement.quarter].push(planElement.courseNumber);
        }
        return output;
    };

    var getPlans = function(planIds, index){
        if(index == 0 ){
            $scope.output = {};    
        }
        
        var planId = planIds[index];
        var url = "http://virtualstudentadviserapi.azurewebsites.net/api/vsa/"+planId;
        $http.get(url)
        .then(function(result) {
            $scope.output[planId] = transformApi(result.data);
            if(index+1 < planIds.length){
                getPlans(planIds, index+1);
            }
            // console.log($scope.output);        
        }, function(error){
            console.log(error);
        });
    };

    getPlans($scope.schoolPlans, 0);
    
  });
