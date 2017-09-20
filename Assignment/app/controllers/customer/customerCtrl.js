app.controller('customerCtrl', function($state,configService, dataService){
    var vm = this;

    vm.modelObj = {};

    configService.getFormData().then(function(response){
        vm.formData = response;
    })

    configService.getGridDataConfig().then(function(response){
        vm.addColumn = response;
    })    

    dataService.getGridData().then(function(response){
        vm.addGridData = response;
    })


    vm.save = function(){
        console.log(vm.modelObj);
        dataService.saveData(vm.modelObj);
        vm.config = true;
        
        vm.modelObj = undefined;
    }

    vm.cancel = function(){
        vm.config = false;
    }

    vm.addCustomer = function(){
        vm.config = true;
    }

    vm.upDate = function(id){
        dataService.upDataRow(id)
        vm.config = true;
    }

  vm.homePage = function(){
      vm.config = false;
      $state.go('home');
  }

  vm.delete = function(id){
      for(var i = 0 ; i<vm.addGridData.length; i++){
          if(vm.addGridData[i].id === id){
              vm.addGridData.splice(i,1);
          }
      }
  }

})