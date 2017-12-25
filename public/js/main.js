var app = angular.module('myApp',["ngRoute"]);

app.controller('myCtrl', function($rootScope,$scope){
    $scope.title = "Welcome!";
});

app.config(function ($routeProvider){
    $routeProvider.
    when('/',{
        templateUrl: 'template/home.html',
        controller:"homeCtrl"
    }).
    when('/signin',{
        templateUrl: 'template/signin.html'
    }).
    when('/register',{
        templateUrl: 'template/register.html',
        controller:"regCtrl"
    }).
    when('/pediatrics',{
        templateUrl: 'template/pediatrics.html'
    }).
    when('/locations',{
        templateUrl:'template/locations.html',
        controller: 'locationsController'
    }).
    when('/thankyou',{
      templateUrl: 'template/thankyou.html'
    }).
    when('/thanks',{
      templateUrl: 'template/thanks.html'
    }).
    when('/checkin',{
      templateUrl: 'template/checkin.html',
      controller:'checkinCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });

});
app.controller("homeCtrl", function($scope,$location){
  $scope.slide =function(){
  var slideIndex = 0;
  slideShow();

function slideShow(){

        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        var len = slides.length;
        console.log(len);
        for (i = 0; i < len; i++) {
            slides[i].style.display = "none";
         }
         slideIndex++;
        if (slideIndex > len) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(slideShow, 2000); // Change image every 2 seconds

      }
    };

$scope.patient = function(){
  $location.path('register');
};
$scope.checkIn= function(){
  $location.path('checkin');
}
});
app.controller("regCtrl", function($scope, $http, $location){
  $http.get('members.json').then(function (data) {
   console.log(data);
     $scope.members = data.data.member;

   });
  document.getElementById("rpwd").addEventListener("keyup", function(){
      var pwd = document.getElementById("pwd").value;
      var rpwd = document.getElementById("rpwd").value;
      console.log()
      if(pwd === rpwd){
        $scope.msg = "Password matched";
        $scope.error ="";
      }
      else{
        $scope.error = "Please check the password";
      }
  });

  $scope.register = function(newmbr){
    var newmbr = {
      "fname":$scope.newmbr.fname,
      "lname":$scope.newmbr.lname,
      "email":$scope.newmbr.email,
      "phone":$scope.newmbr.phone,
      "pwd":$scope.newmbr.pwd
    };
    $scope.members.push(newmbr);
      console.log($scope.members);
      $location.path('thankyou');
  }
});
app.controller('locationsController', function($scope, $http){
    $http.get('locations.json').then(function (data) {
        $scope.locations = data.data.location;
    });
    $http.get('sanMateo.json').then(function(data){
        $scope.clinics = data.data.clinic;
    });

app.controller('checkinCtrl', function($scope){

});
});
