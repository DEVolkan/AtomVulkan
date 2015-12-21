angular.module('app.Home', ['angular-inview', 'ngFacebook'])
.config( function( $facebookProvider ) {
  $facebookProvider.setAppId('1060080154036431');
})
.run( function( $rootScope ) {
  // Load the facebook SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());
})
.controller('homeController', function($scope, $facebook) {
    $scope.test = "hallo1";
    $scope.title = false;
    $scope.objectInView = function (index, inview, inviewpart, event) {
        if (inview === true) {
            console.log("true")
            $scope.title = true;
        } else {
            console.log("false")
            $scope.title = false;
        }
    }
    
    $scope.isLoggedIn = false;
  $scope.login = function() {
    $facebook.login().then(function() {
      refresh();
    });
  }
  $scope.logout = function() {
      $facebook.logout().then(function() {
          refresh();
      });
  }
  
  $scope.getPost = function() {
      console.log($facebook.api("489123077933556"));
  }
  
  function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        $scope.welcomeMsg = "Welcome " + response.name;
        $scope.isLoggedIn = true;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
      });
  }
  
  refresh();
});