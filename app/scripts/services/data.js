'use strict';

/**
 * @ngdoc service
 * @name vsaWebApp.data
 * @description
 * # data
 * Factory in the vsaWebApp.
 */
 angular.module('vsaWebApp')
 .factory('data', function () {
    // Service logic
    // ...

    var output = {
      "plans": {
        "Plan-1": {
          "Quarter-1": {
            "coursesSuggested": [
            "CSS175",
            "CSS161",
            "CSS181"
            ]
          },
          "Quarter-2": {
            "coursesSuggested": [
            "CSS341"
            ]
          },
          "Quarter-3": {
            "coursesSuggested": [
            "CSS220"
            ]
          }
        },
        "Plan-2": {
          "Quarter-1": {
            "coursesSuggested": [
            "CSS175",
            "CSS181"
            ]
          },
          "Quarter-2": {
            "coursesSuggested": [
            "CSS182"
            ]
          },
          "Quarter-3": {
            "coursesSuggested": [
            "CSS341"
            ]
          },
          "Quarter-4": {
            "coursesSuggested": [
            "CSS220"
            ]
          }
        },
        "Plan-3": {
         "Quarter-1": {
           "coursesSuggested": [
           "CSS175",
           "CSS161",
           "CSS181"
           ]
         },
         "Quarter-2": {
           "coursesSuggested": [
           "CSS341"
           ]
         },
         "Quarter-3": {
           "coursesSuggested": [
           "CSS344"
           ]
         }
       },
       "Plan-4": {
         "Quarter-1": {
           "coursesSuggested": [
           "CSS175",
           "CSS181"
           ]
         },
         "Quarter-2": {
           "coursesSuggested": [
           "CSS182"
           ]
         },
         "Quarter-3": {
           "coursesSuggested": [
           "CSS341"
           ]
         },
         "Quarter-4": {
           "coursesSuggested": [
           "CSS344"
           ]
         }
       } 
     }
   };

   var schoolNames = [
     {
        "id":"UW",
        "value": "University of Washington (UW)"
      },
      {
      "id":"WSU",
      "value": "Washington State University (WSU)"
      }
   ];

   var majors = [
    {
      "id":"CS",
      "value": "Computer Science"
    },
    {
      "id":"ME",
      "value": "Mechanical Engineering"
    },
    {
      "id":"EE",
      "value": "Electrical Engineering"
    }
  ];

  var plans = {
    "UW": {
      "CS":[220, 221],
      "EE":[170, 171],
      "ME":[190, 191]
    },
    "WSU": {
      "CS":[160, 161],
      "EE":[180, 181],
      "ME":[200, 201]
    }
  };

    // Public API here
    return {
      getResult: function () {
        return output;
      },
      getSchoolNames: function () {
        return schoolNames;
      },
      getMajors: function () {
        return majors;
      },
      getPlans: function () {
        return plans;
      }

    };
  });
