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

    // Public API here
    return {
      getResult: function () {
        return output;
      }
    };
  });
