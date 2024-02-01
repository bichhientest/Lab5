var app= angular.module("myapp",[]);
app.controller("ctrl1",function($scope,$rootScope){
    $scope.handleclick=function(){

  $rootScope.Fullname=$scope.firstname+" " +$scope.lastname
 };
});

app.controller("ctrl2",function($scope,$rootScope){

   
});