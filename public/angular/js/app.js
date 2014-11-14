/* global angular */
(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/transaction/1'
            });
    }

    angular.module('wizardControllers', []);

    angular.module('wizardServices', ['ngResource']);

    angular.module('wizard', [
        'ngRoute',
        'wizardControllers',
        'wizardServices',
        'wizard.transaction',
        'wizard.customer',
        'wizard.payment',
        'wizard.success'
    ])
    .config(config);
})();
