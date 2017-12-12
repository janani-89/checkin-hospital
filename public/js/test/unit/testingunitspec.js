describe('testing angular routes', function(){

    var $route, $rootScope, $location, $httpBackend;
    beforeEach(function(){
        module('myApp');
        inject(function($injector){
            $route = $injector.get('$route');
            $rootScope = $injector.get('$rootScope');
            $location = $injector.get('$location');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET','template/home.html').respond('home');
        });
    });
    it('should navigate to home', function(){
        $rootScope.$apply(function() {
            $location.path('/');
          });
        expect($location.path()).toBe('/');
        expect($route.current.templateUrl).toBe('template/home.html');
    });
    it('should redirect not registered urls to home', function(){ 
        $rootScope.$apply(function() {

            $location.path('/other');
        });
        expect($location.path()).toBe('/');
        expect($route.current.templateUrl).toBe('template/home.html');

        });
});