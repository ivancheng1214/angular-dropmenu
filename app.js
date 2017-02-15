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