angular.module('dropmenu',[])
	.directive('dropmenu', function() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'ctrl',
			bindToController: {
				items: '=',
				selected: '=',
				label: "@",
				isOpen: '='
			},
			controller: function() {

				this.onClickItem = function(item) {
					this.selected = item;
				}

				this.onHeaderClick = function() {					
					this.headerClicked = true;
					this.isOpen = !this.isOpen;
				}

				this.closeBody = function() {
					if (this.headerClicked) {
						this.headerClicked = false;
						return;
					}

					this.isOpen = false;
				}
			},
			link: function(scope, element, attrs,ctrl) {
				document.addEventListener('click' , function() {
					ctrl.closeBody();
					scope.$apply();
				})
			},
			templateUrl: './src/dropmenu.html'

		}	
	})