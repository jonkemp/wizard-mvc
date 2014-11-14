/* global angular */
(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/transaction/:transactionId/customer/:customerId', {
                templateUrl: 'js/customer/customer.html',
                controller: 'CustomerCtrl',
                controllerAs: 'ctrl'
            });
    }

    angular.module('wizard.customer', ['ngRoute'])
        .config(config);
})();
