/* global $, _ */

var TemplateManager = {};

(function () {
    'use strict';

    var cache = {};

    TemplateManager.template = function (path) {

        var deferred = new $.Deferred(),
            resolvePromise = function (template) {
                deferred.resolveWith( null, [  _.template( template ) ] );
            };

        if (cache[path]) {
            resolvePromise( cache[path] );
        } else {
            $.get(path, function(data) {
                cache[path] = data;
                resolvePromise( data );
            });
        }

        return deferred.promise();
    };

})();
