/* global angular */
(function () {
    'use strict';

    var State = function () {
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
    };

    angular
        .module('wizardServices')
        .factory('State', State);
})();
