/* global angular */
(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/transaction/:transactionId/customer/:customerId/payment', {
                templateUrl: 'js/payment/payment.html',
                controller: 'CustomerPaymentCtrl',
                controllerAs: 'ctrl'
            });
    }

    angular.module('wizard.payment', ['ngRoute'])
        .config(config);
})();
