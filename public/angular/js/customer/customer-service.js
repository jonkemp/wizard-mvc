/* global angular */
(function () {
    'use strict';

    var Customer = function ($resource) {
        return $resource('/data/appData.json', null, {
            'query':  { method: 'GET', isArray: true, cache: true }
        });
    };

    Customer.$inject = ['$resource'];

    angular
        .module('wizardServices')
        .factory('Customer', Customer);
})();
