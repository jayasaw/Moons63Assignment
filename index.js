var app = angular.module('app' , ['ui.router'])
app.controller('mainCtrl' , function($state){
    var vm = this;
    $state.go('home');
    
})

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl: './app/controllers/home/home.html',
        controller : 'homeCtrl',
        controllerAs : 'homeCtrl'
    })
    .state('customer',{
        url :'/customer',
        templateUrl : './app/controllers/customer/customer.html',
        controller : 'customerCtrl',
        controllerAs : 'form'
    })
    .state('search',{
        url : '/search',
        templateUrl : './app/controllers/search/search.html',
        controller : 'searchCtrl',
        controllerAs : 'srch'
    })
   // $urlRouterProvider.otherwise('home');
})