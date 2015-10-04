angular.module('starter.controllers', [])

.controller('UserPhotosCtrl', function($scope, $stateParams, $timeout, $http, ionicMaterialInk, ionicMaterialMotion) {

  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'https://api.500px.com/v1/photos?feature=user&username=Basel&consumer_key=Syy77qUq0jezrb44IRZVwOIOFDakIfMnoB9rS0Kx'
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available

      $scope.user_photos = response.data.photos;
      console.log($scope.user_photos);

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
      console.log('error occurred while retrieving user photos');
    });

})

.controller('UserFavoritesCtrl', function($scope, $stateParams, $timeout, $http, ionicMaterialInk, ionicMaterialMotion) {

// Simple GET request example:
$http({
  method: 'GET',
  url: 'https://api.500px.com/v1/photos?feature=user_favorites&username=Basel&consumer_key=Syy77qUq0jezrb44IRZVwOIOFDakIfMnoB9rS0Kx'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.user_favorites = response.data.photos;
    //console.log($scope.user_favorites);

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

    console.log('error occurred while retrieving user favorites');
  });

})

.controller('UserFriendsCtrl', function($scope, $stateParams, $timeout, $http, ionicMaterialInk, ionicMaterialMotion) {
// Simple GET request example:
$http({
  method: 'GET',
  url: 'https://api.500px.com/v1/photos?feature=user_friends&username=Basel&consumer_key=Syy77qUq0jezrb44IRZVwOIOFDakIfMnoB9rS0Kx'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available

    $scope.user_friends = response.data.photos;
//    console.log($scope.user_friends);

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

    console.log('error occurred while retrieving user favorites');
  });
});
