var app = angular.module('BlankApp', ['ngMaterial','ngTouch', 'ui.grid', 'ui.grid.pinning', 'ui.grid.cellNav', 'ui.grid.edit']);


var data1 = [
{
  
}
];

app.controller('AppCtrl', ['$scope', '$log', function($scope, $log){
    {
        //osobno id, osobno nazwa 
        //nagłówek nie rozwijalny
        //id nie dostosowuje się, raz nadany numer zostaje na stałe
        // etykiety cech, waznosc, etykieta ot tak zdefiniowana

        for (var i = 1; i <= 50; i++) {
            if (i % 2) {
                data1[i] = { "id": "" + i, "name": "PenX" + "ballPoint" }
            }
            else {
                data1[i] = { "id": "" + i, "name": "PenX" + "Sharp" }
            }

        }

        var tabs = [
              { title: '1 Rafał Moskowiak', content: "Turbo Pen2000".bold().toUpperCase().big() },
              { title: '2 Jan Kowalski', content: "Turbo Pen2000".bold().toUpperCase().big() },
        ],
            selected = null,
            previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 2;
        $scope.$watch('selectedIndex', function (current, old) {
            previous = selected;
            selected = tabs[current];
            if (old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
            if (current + 1) $log.debug('Hello ' + selected.title + '!');
        });
        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            tabs.push({ title: title, content: view, disabled: false });
        };
        $scope.removeTab = function (tab) {
            var index = tabs.indexOf(tab);
            tabs.splice(index, 1);
        };
    }


    //app.controller('MainCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {}])
    $scope.gridOptions0 = {};
    $scope.gridOptions1 = {};

    $scope.gridOptions1.enableCellEditOnFocus = true;

    $scope.gridOptions1.enableColumnResizing = true;
   

    $scope.gridOptions0.data = data1;

   var x = $scope.gridOptions0.columnDefs = [
      { name: 'id', width: 100, pinnedLeft: true, enableCellEditOnFocus: false, enableColumnResizing: true },
      { name: 'name', width: 150, pinnedLeft: true, enableCellEditOnFocus: false , enableColumnResizing : true},
      {
          name: 'Colour', enableColumnResizing : true, editableCellTemplate: 'ui-grid/dropdownEditor',
           editDropdownValueLabel: 'trait1', editDropdownOptionsArray: [
         { id: 'too Shiny', trait1: 'too Shiny' },
         { id: 'too dull', trait1: 'too dull' },
         { id: 'not even similar', trait1: 'not even similar' },
         { id: 'Perfect', trait1: 'Perfect' }
          ]
      },
      {
          name: 'Durability',  editableCellTemplate: 'ui-grid/dropdownEditor',
           editDropdownValueLabel: 'trait2', editDropdownOptionsArray: [
         { id: 'indestructible', trait2: 'indesctructible' },
         { id: 'medicore', trait2: 'medicore' },
         { id: 'easy to break', trait2: 'easy to break' }
          ]
      },
        {
            name: 'Surface', editableCellTemplate: 'ui-grid/dropdownEditor',
            editDropdownValueLabel: 'trait3', editDropdownOptionsArray: [
           { id: 'too Slippery', trait3: 'too Slippery' },
           { id: 'too rugged', trait3: 'too rugged' },
           { id: 'Ok', trait3: 'Ok' }
            ]
        },
           {
               name: 'Surface123', editableCellTemplate: 'ui-grid/dropdownEditor',
               editDropdownValueLabel: 'trait3', editDropdownOptionsArray: [
              { id: 'too Slippery', trait3: 'too Slippery' },
              { id: 'too rugged', trait3: 'too rugged' },
              { id: 'Ok', trait3: 'Ok' }
               ]
           },
             {
                 name: 'Surface1234', editableCellTemplate: 'ui-grid/dropdownEditor',
                 editDropdownValueLabel: 'trait3', editDropdownOptionsArray: [
                { id: 'too Slippery', trait3: 'too Slippery' },
                { id: 'too rugged', trait3: 'too rugged' },
                { id: 'Ok', trait3: 'Ok' }
                 ]
             },
               {
                   name: 'Surface1235', editableCellTemplate: 'ui-grid/dropdownEditor',
                   editDropdownValueLabel: 'trait3', editDropdownOptionsArray: [
                  { id: 'too Slippery', trait3: 'too Slippery' },
                  { id: 'too rugged', trait3: 'too rugged' },
                  { id: 'Ok', trait3: 'Ok' }
                   ]
               },
       {
           name: 'verdict', width: 100, pinnedRight: true, editableCellTemplate: 'ui-grid/dropdownEditor',
           editDropdownValueLabel: 'trait4', editDropdownOptionsArray: [
          { id: 'barely', trait4: 'barely' },
          { id: "the best", trait4: 'the best' },
          { id: "bad", trait4: 'bad' }
           ]
       },

    ];

   $scope.gridOptions1.data = data1;
   $scope.gridOptions1.columnDefs = x;


}])

.filter('mapTrait', function () {
    var genderHash = {
        1: 'good',
        2: 'bad'
    };

    return function (input) {
        if (!input) {
            return '';
        } else {
            return genderHash[input];
        }
    };
})




var data2 = [
{
    "id": "1",
    "name": "Pen",

    "verdict": "awesome"
}
];
