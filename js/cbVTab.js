angular.module( 'cbVTabs', [] )

.directive( 'cbVTabs', function () {

    return {
     
        restrict: 'E',
        transclude: true,
        scope: {},

        controller: function($scope) {
            var tabs = $scope.tabs = [];
/*
            $scope.select = function(tab) {
                angular.forEach(tabs, function(tab) {
                    tab.selected = false;
                });
                tab.selected = true;
            };
*/
            this.addTab = function(tab) {
/*
                if (tabs.length === 0) {
                    $scope.select(tab);
                }
*/                
                tabs.push(tab);
                console.log(tab);
            };

        },

        template: '<div class="red"></div><div class="blue" ng-transclude></div>',
    
        link: function postLink( scope, element, attributes, controller ) { 

        },          
    };  
})

.directive('cbTab', function() {
    return {
      require: '^cbVTabs',
      restrict: 'E',
/*
      scope: {
        title: '@'
      },
*/
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addTab(scope);
      }
     
    };
  });

//can continue to add directives.




