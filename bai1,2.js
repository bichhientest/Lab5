var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
$scope.student={};
$scope.save=function(){
    $scope.list_students.push(angular.copy($scope.student))
}
$scope.cancel=function(){
    $scope.student={};
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