var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pinning', 'ui.grid.cellNav', 'ui.grid.edit']);

app.controller('MainCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    $scope.gridOptions = {};


    $scope.gridOptions.data = data1;

    $scope.gridOptions.columnDefs = [
      { name: 'id', width: 50, pinnedLeft: true },
      { name: 'name', width: 100, pinnedLeft: true },
      {
          name: 'colour', width: 100, editableCellTemplate: 'ui-grid/dropdownEditor',
          cellFilter: 'mapTrait', editDropdownValueLabel: 'trait', editDropdownOptionsArray: [
         { id: 1, trait: 'good' },
         { id: 2, trait: 'bad' }
         ]
      },
      { name: 'verdict', width: 150, pinnedRight: true },
    ];
  

    $http.get('/data/500_complex.json')
      .success(function (data) {
          $scope.gridOptions.data = data;
      });



}])

.filter('mapTrait', function() {
    var genderHash = {
        1: 'good',
        2: 'bad'
    };
 
    return function(input) {
        if (!input){
            return '';
        } else {
            return genderHash[input];
        }
    };
})
var data1 = [
{
    "id": "1",
    "name": "Pen",
    
    "verdict" : "ok, barely"
}
];


