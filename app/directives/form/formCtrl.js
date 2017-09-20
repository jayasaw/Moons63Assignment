app.controller('myFormCtrl', function(){
    var vm = this;
})
app.directive('myForm', function(){
    return {
        restrict : 'E',
        templateUrl : 'app/directives/form/form.html',
        controller : 'myFormCtrl',
        controllerAs : 'formCtrl',
        bindToController : true, 
        scope : {
           configForm : '=',
            model : '='
         
       
        }
    }
})