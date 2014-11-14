/* global angular */
(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/transaction/:transactionId', {
                templateUrl: 'js/transaction/transaction.html',
                controller: 'TransactionCtrl',
                controllerAs: 'ctrl'
            });
    }

    angular.module('wizard.transaction', ['ngRoute'])
        .config(config);
})();
