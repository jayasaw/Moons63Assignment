app.service('dataService' , function($q){

   this.getGridData = getGridData;
    this.saveData = saveData;

 var gridData = []

    function getGridData(){
        return $q.when(gridData);
    }

    function saveData(data){
        gridData.push(data);
    }

    this.upDataRow = function(data){
       data.id = gridData.length +1;
       
    }
})