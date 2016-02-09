//Copyright {2016} {NIIT Limited, Wipro Limited}
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
//   Name of Developers  Raghav Goel, Kshitij Jain, Lakshay Bansal, Ayush Jain, Saurabh Gupta, Akshay Meher
//

angular.module('quizRT')
  .controller('topicController', function(socket,$scope,$rootScope,$routeParams,$http){
     $scope.topicID=$routeParams.topicID;
     $scope.topic="";
     $rootScope.stylesheetName="topic";
     $rootScope.tId= $scope.topicID;
     socket.emit('leaveGame', $scope.topicID);
     var path = '/topicsHandler/topic/'+$scope.topicID;
     $rootScope.tId=$scope.topicID;

     socket.emit('disjoin',"leaving page topic play");
     $http.get(path)
          .success(function(data, status, headers, config) {
               $scope.topic = data;
               $rootScope.title = data.topicName;
           })
          .error(function(data, status, headers, config) {
             console.log(error);
           });

     $scope.followUnfollow=function(){
       $http.put(path)
            .success(function(data, status, headers, config) {
              $scope.topic = data;
            })
            .error(function(data, status, headers, config) {
              console.log(error);
            });
    };

    $scope.addToPlayedGames=function(){
      $http.post(path)
           .success(function(data, status, headers, config) {
           })
           .error(function(data, status, headers, config) {
             console.log(error);
           });
    }

  });
