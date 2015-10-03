angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, $http, ionicMaterialInk, ionicMaterialMotion) {
/*    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);
*/

// Simple GET request example:
$http({
  method: 'GET',
  url: 'https://api.500px.com/v1/photos?feature=user_favorites&username=Basel&consumer_key=Syy77qUq0jezrb44IRZVwOIOFDakIfMnoB9rS0Kx'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.user_favorites = response.data.photos;
    console.log($scope.user_favorites);


    $scope.$apply();
    
    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });





})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
