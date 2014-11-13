/* global angular */
(function () {
    'use strict';

    var Item = function ($resource) {
        return $resource('/data/itemData.json', null, {
            'query':  { method: 'GET', isArray: true, cache: true }
        });
    };

    Item.$inject = ['$resource'];

    angular
        .module('wizardServices')
        .factory('Item', Item);
})();
