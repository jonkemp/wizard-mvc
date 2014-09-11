/* global angular */
var wizardServices = angular.module('wizardServices', ['ngResource']);

wizardServices.factory('Transaction', ['$resource',
    function ($resource) {
        return $resource('transactionData.json', null, {
            'query':  { method: 'GET', isArray: true, cache: true }
        });
    }]);

wizardServices.factory('Item', ['$resource',
    function ($resource) {
        return $resource('itemData.json', null, {
            'query':  { method: 'GET', isArray: true, cache: true }
        });
    }]);

wizardServices.factory('Customer', ['$resource',
    function ($resource) {
        return $resource('appData.json', null, {
            'query':  { method: 'GET', isArray: true, cache: true }
        });
    }]);

wizardServices.factory('State', function () {
    var _state = 'index';

    return {
        get: function () {
            return _state;
        },

        set: function (state) {
            if (state) {
                _state = state;
            }

            return _state;
        }
    };
});
