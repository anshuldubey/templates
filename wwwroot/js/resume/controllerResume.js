(function () {
    //'use strict';
    angular
        .module('appResume', [])
        .controller('controllerResume', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.title = 'controller';

        activate();

        function activate() { }
    }
})();
