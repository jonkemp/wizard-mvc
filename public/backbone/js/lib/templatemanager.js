/* global $, _ */

(function (global) {
    'use strict';

    var _TemplateManager = global.TemplateManager;

    function TemplateManager() {
        var cache = {};

        return {
            template: function (path) {

                var deferred = new $.Deferred(),
                    resolvePromise = function (template) {
                        deferred.resolveWith( null, [  _.template( template ) ] );
                    };

                if (cache[path]) {
                    resolvePromise( cache[path] );
                } else {
                    $.ajax({
                        url: path,
                        success: function (data) {
                            cache[path] = data;
                            resolvePromise( data );
                        },
                        error: function () {
                            deferred.reject();
                        }
                    });
                }

                return deferred.promise();
            },

            noConflict: function () {
                global.TemplateManager = _TemplateManager;
                return TemplateManager;
            }
        };
    }

    global.TemplateManager = TemplateManager;

})(window);
