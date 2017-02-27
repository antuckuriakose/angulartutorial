  // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'templates/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'contactController',
                css         : 'templates/style_contact.css'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Home page!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
        $scope.about = {
        "color" : "white",
        "background-color" : "coral",
        "font-size" : "60px",
        "padding" : "50px"
    }
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us!';
        $scope.name    = '';
        $scope.email   = '';
        $scope.company = '';
        $scope.msg   = '';
        $scope.selectop = '';
        $scope.submitform = function(){
           $scope.submitted =true;
           
        };
        $scope.initialize = function() {
          var map = new google.maps.Map(document.getElementById('map_div'), {
             center: {lat: -34.397, lng: 150.644},
             zoom: 8
          });
       }    
       
       google.maps.event.addDomListener(window, 'load', $scope.initialize);   
    });

  