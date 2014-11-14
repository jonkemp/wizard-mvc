/* global angular */
(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/transaction/:transactionId/success', {
                templateUrl: 'js/success/success.html',
                controller: 'TransactionSuccessCtrl',
                controllerAs: 'ctrl'
            });
    }

    angular.module('wizard.success', ['ngRoute'])
        .config(config);
})();
