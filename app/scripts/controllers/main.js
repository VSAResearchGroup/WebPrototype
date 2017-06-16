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
    $scope.schools = data.getSchoolNames();
    $scope.school = $scope.schools[0];
    $scope.majors = data.getMajors();
    $scope.major = $scope.majors[0];
    var plans = data.getPlans();
    $scope.schoolPlans = plans[$scope.school.id][$scope.major.id];
    
    $scope.init = function(){
        $scope.electiveCourses = {};
        $scope.courseInputs = {};
        $scope.output = {};
    };
    $scope.init();
    
    $scope.deleteCourse = function(targetObj, planId, year, quarterName, index){
        targetObj[planId][year][quarterName].splice(index, 1);
    };

    $scope.changeSchool = function(value){
        $scope.school = value;
        $scope.schoolPlans = plans[$scope.school.id][$scope.major.id];
        getPlans($scope.schoolPlans, 0);
        // console.log($scope.schoolPlans);
        $scope.init();
    };
    $scope.changeMajor = function(value){
        $scope.major = value;
        $scope.schoolPlans = plans[$scope.school.id][$scope.major.id];
        getPlans($scope.schoolPlans, 0);
        // console.log($scope.schoolPlans);
        $scope.init();
    };

    $scope.addCourse = function(planId, year, quarter, value){
        if(value == "" || value == undefined) {return;}
        if($scope.electiveCourses[planId] == undefined) {
             $scope.electiveCourses[planId] = {};
        }
        if($scope.electiveCourses[planId][year] == undefined) {
             $scope.electiveCourses[planId][year] = {};
        }
        if( $scope.electiveCourses[planId][year][quarter] == undefined) {
             $scope.electiveCourses[planId][year][quarter] = [];
        }

         $scope.electiveCourses[planId][year][quarter].push(value);
         $scope.courseInputs[planId][year][quarter] = "";
         console.log($scope.electiveCourses);
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
        $scope.showLoader = true;
        if(index == 0 ){
            $scope.output = {};    
        }
        
        var planId = planIds[index];
        var url = "http://virtualstudentadviserapi.azurewebsites.net/api/vsa/"+planId;
        $http.get(url)
        .then(function(result) {
            $scope.output[planId] = transformApi(result.data);
            if ($scope.courseInputs[planId] == undefined) {
                $scope.courseInputs[planId] = {};
            }
            var years = Object.keys($scope.output[planId]);
            for(var i=0; i<years.length; i++) {
                $scope.courseInputs[planId][years[i]] = {
                    Fall:[],
                    Spring:[],
                    Summer:[],
                    Winter:[]
                };
            }
            if(index+1 < planIds.length){
                getPlans(planIds, index+1);
            }
            $scope.showLoader = false;
            // console.log($scope.output); 
            // console.log($scope.courseInputs);
        }, function(error){
            console.log(error);
        });
    };

    getPlans($scope.schoolPlans, 0);
    
  });
