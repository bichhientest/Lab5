var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
$scope.student={};
$scope.index=-1;
$scope.save=function(){
    $scope.list_students.push(angular.copy($scope.student))
}
$scope.cancel=function(){
    $scope.student={};
}
$scope.edit=function(index){
 $scope.index=index;
 $scope.student=angular.copy($scope.list_students[index]);
}
$scope.update=function(){
    $scope.list_students[$scope.index]=angular.copy($scope.student);
    $scope.cancel();
}
$scope.delete=function(){
    $scope.list_students.splice($scope.index,1);
    $scope.cancel();
}
$scope.list_students=[
    {
        name: "Lê Thị Bích Hiền",
        date:"20-02-2004",
        mark:9
    },
    {
        name: "Phạm Ngọc Quỳnh",
        date:"06-11-2004",
        mark:9
    },
    {
        name: "Lý Gia Khang",
        date:"11-10-2022",
        mark:9
    }
]

});