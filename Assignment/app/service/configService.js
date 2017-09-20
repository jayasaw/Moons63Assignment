app.service('configService', function($q){

    this.getFormData = getFormData
    this.getGridDataConfig = getGridDataConfig  

    var formConfig = [{labelName : 'CustomerName', fieldName :'customername', type :'text'},
                    {labelName : 'CustomerCode', fieldName :'customercode', type :'number'},
                    {labelName : 'MobileNo', fieldName :'mobileno', type :'number'},
                    {labelName : 'EmailId', fieldName :'emailid', type :'email'}]


                    function getFormData(){
                       return  $q.when(formConfig);
                    }

        var gridConfig = [{columnName :'checkbox' ,displayName : '' },
            {columnName :'customername' ,displayName : 'CustomerName' },
                        {columnName :'customercode' ,displayName : 'CustomerCode' },
                        {columnName :'mobileno' ,displayName : 'MobileNo' },
                        {columnName :'emailid' ,displayName : 'EmailId' },]   ;   
                        
                        
                        function getGridDataConfig(){
                            return $q.when(gridConfig);
                        }

})