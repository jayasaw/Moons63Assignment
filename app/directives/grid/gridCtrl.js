app.controller('myGridCtrl', function(){
    var vm = this;

})

app.directive('myGrid', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/grid/grid.html',
        controller: 'myGridCtrl',
        controllerAs: 'myGrid',
        bindToController: true,
        scope: {
            gridSetting: '=',
            rowData : '=',
            back : '&'
        }
    }
});