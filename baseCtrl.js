angular.module('ATF')
.controller('BaseCtrl', ['$scope', '$state', '$timeout', function($scope, $state, $timeout){
	var self = this;
  var circles;

  self.Items = [
  		{val:1, content:"ion-home"},
  		{val:2, content:"ion-alert-circled"},
  		{val:3, content:"ion-heart-broken"},
  		{val:4, content:"ion-trash-a"},
  		{val:5, content:"ion-email"}
  	];

  $timeout(function() {
    circles = document.querySelectorAll('ion-wheel-item');
  });

  $scope.circlesHidden = true;

  $scope.showCircles= function() {
    var $circles = angular.element(circles);
    if ($scope.circlesHidden) {
      $circles.addClass('active');
    } else {
      $circles.removeClass('active');
    }
    $scope.toggleCirclesHidden();
  };

  $scope.toggleCirclesHidden = function() {
    return $scope.circlesHidden = !$scope.circlesHidden;
  };
}])
