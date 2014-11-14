/* global angular */
(function () {
    'use strict';

    var Transaction = function ($resource) {
        return $resource('/data/transactionData.json', null, {
            'query':  { method: 'GET', isArray: true, cache: true }
        });
    };

    Transaction.$inject = ['$resource'];

    angular
        .module('wizardServices')
        .factory('Transaction', Transaction);
})();
