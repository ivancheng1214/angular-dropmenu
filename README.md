# Angular dropmenu directive

html dropdown directive for AngularJS.

angular 1.4 +
No jquery, No Bootstrap

See demo: https://ivancheng1214.github.io/angular-dropmenu/

## Usage

Include `dropmenu` in your module dependencies:

```js
var app = angular.module("demoApp", ['dropmenu']);
```

In your controller, setup the dataset and selected model.

```js
angular.module('demoApp', ['dropmenu'])
    .controller('demoController',['$scope', function($scope){
        $scope.items = [{
            id: 1,
            name: 'whiskey',
            desc: 'whiskey'
        }, {
            id: 2,
            name: 'vodka',
            desc: 'vodka'
        }, {
            id: 3,
            name: 'wine',
            desc: 'wine'
        }, {
            id: 4,
            name: 'lam',
            desc: 'Lam'
        }]

        $scope.selected = {}
    }])
```

```html

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="./src/dropmenu.css" rel="stylesheet">
    </head>
    
    <body ng-app='demoApp' ng-controller="demoController">
        <p>
            Your Favourite Drink: {{selected}}
        </p>
        <dropmenu items="items" selected="selected" label= "name" is-open="true"></dropmenu>

        <script src= "https://code.angularjs.org/1.5.11/angular.min.js"></script>
        <!-- <script src="angular.min.js"></script> -->
        <script src="./src/dropmenu.js"></script>
        <script src="./app.js"></script>
    </body>
</html>

```
