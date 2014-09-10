/* global angular */
'use strict';

var wizard = angular.module('wizard', [
    'ngRoute',
    'wizardControllers',
    'wizardServices'
]);

wizard.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/transaction/:transactionId', {
                templateUrl: 'partials/item.html',
                controller: 'TransactionCtrl'
            })
            .when('/transaction/:transactionId/customer/:customerId', {
                templateUrl: 'partials/customer.html',
                controller: 'CustomerCtrl'
            })
            .when('/transaction/:transactionId/customer/:customerId/payment', {
                templateUrl: 'partials/payment.html',
                controller: 'CustomerPaymentCtrl'
            })
            .when('/transaction/:transactionId/success', {
                templateUrl: 'partials/success.html',
                controller: 'TransactionSuccessCtrl'
            })
            .otherwise({
                redirectTo: '/transaction/1'
            });
    }]);
