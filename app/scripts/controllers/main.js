'use strict';

/**
 * @ngdoc function
 * @name vsaWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vsaWebApp
 */
angular.module('vsaWebApp')
  .controller('MainCtrl', function ($scope , $http, $sce, data) {
    $scope.output = data.getResult().plans;
    $scope.role = 'Student';
    $scope.electiveCourses = {
        "Plan-1": {
          "Quarter-1": {
            "coursesSuggested": []
          },
          "Quarter-2": {
            "coursesSuggested": []
          },
          "Quarter-3": {
            "coursesSuggested": []
          },
          "Quarter-4": {
            "coursesSuggested": []
          }
        },
        "Plan-2": {
          "Quarter-1": {
            "coursesSuggested": []
          },
          "Quarter-2": {
            "coursesSuggested": []
          },
          "Quarter-3": {
            "coursesSuggested": []
          },
          "Quarter-4": {
            "coursesSuggested": []
          }
        },
        "Plan-3": {
         "Quarter-1": {
           "coursesSuggested": []
         },
         "Quarter-2": {
           "coursesSuggested": []
         },
         "Quarter-3": {
           "coursesSuggested": []
         },
         "Quarter-4": {
            "coursesSuggested": []
          }
       },
       "Plan-4": {
         "Quarter-1": {
           "coursesSuggested": []
         },
         "Quarter-2": {
           "coursesSuggested": []
         },
         "Quarter-3": {
           "coursesSuggested": []
         },
         "Quarter-4": {
           "coursesSuggested": []
         }
       } 
     };
    $scope.courseInputs = {
        "Plan-1": {
          "Quarter-1": "",
          "Quarter-2": "",
          "Quarter-3": ""
        },
        "Plan-2": {
          "Quarter-1": "",
          "Quarter-2": "",
          "Quarter-3": "",
          "Quarter-4": ""
        },
        "Plan-3": {
         "Quarter-1": "",
         "Quarter-2": "",
         "Quarter-3": ""
       },
       "Plan-4": {
         "Quarter-1": "",
         "Quarter-2": "",
         "Quarter-3": "",
         "Quarter-4": ""
       } 
     };
    $scope.deleteCourse = function(targetObj, planName, quarterName, index){
        targetObj[planName][quarterName]["coursesSuggested"].splice(index, 1);
    	//$scope.output[planName][quarterName]["coursesSuggested"].splice(index, 1);
    };

    $scope.changeRole = function(value){
        $scope.role = value;
    };

    $scope.addCourse = function(plan, quarter, value){
        if(value == "" || value == undefined) {return;}
        $scope.electiveCourses[plan][quarter]["coursesSuggested"].push(value);
        $scope.courseInputs[plan][quarter] = "";
    }


    var url = "http://virtualstudentadviserapi.azurewebsites.net/api/vsa/256";
    $http.get(url)
    .then(function(result) {
        console.log(result.data);
    }, function(error){
        console.log("error");
        console.log(error);
    });
  });
