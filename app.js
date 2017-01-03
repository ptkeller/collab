angular.module('ATF', ['ionic', 'ionic.wheel', 'ngMaterial', 'ngMessages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('dash',{
    url: '/',
    views: {
      'app-nav': {
        templateUrl: 'www/templates/base.html',
        controller: 'BaseCtrl as ctrl'
      }
    }
  })
  $urlRouterProvider.otherwise('/')
})
