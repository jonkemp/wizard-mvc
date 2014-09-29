/* global angular */
(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/transaction/:transactionId', {
                templateUrl: 'js/templates/transaction.html',
                controller: 'TransactionCtrl',
                controllerAs: 'ctrl'
            })
            .when('/transaction/:transactionId/customer/:customerId', {
                templateUrl: 'js/templates/customer.html',
                controller: 'CustomerCtrl',
                controllerAs: 'ctrl'
            })
            .when('/transaction/:transactionId/customer/:customerId/payment', {
                templateUrl: 'js/templates/payment.html',
                controller: 'CustomerPaymentCtrl',
                controllerAs: 'ctrl'
            })
            .when('/transaction/:transactionId/success', {
                templateUrl: 'js/templates/success.html',
                controller: 'TransactionSuccessCtrl',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/transaction/1'
            });
    }

    angular.module('wizardControllers', []);

    angular.module('wizardServices', ['ngResource']);

    angular.module('wizard', [
        'ngRoute',
        'wizardControllers',
        'wizardServices'
    ])
    .config(config);
})();
