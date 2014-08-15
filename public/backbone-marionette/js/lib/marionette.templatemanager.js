/* global $, _, Marionette */

Marionette.TemplateManager = (function (Marionette, _, $) {
    'use strict';

    return function (options) {

        options = _.extend({
            dirname: 'js/templates/',
            extname: '.html'
        }, options);

        return {
            template: function (templateId) {

                var deferred = new $.Deferred(),
                    cachedTemplate = Marionette.TemplateCache.templateCaches[templateId];

                if (cachedTemplate) {
                    deferred.resolve();
                } else {
                    $.ajax({
                        url: options.dirname + templateId + options.extname,
                        success: function (template) {
                            cachedTemplate = new Marionette.TemplateCache(templateId);
                            cachedTemplate.compiledTemplate = Marionette.TemplateCache.prototype.compileTemplate(template);
                            Marionette.TemplateCache.templateCaches[templateId] = cachedTemplate;

                            deferred.resolve();
                        },
                        error: function () {
                            deferred.reject();
                        }
                    });
                }

                return deferred.promise();
            }
        };
    };

})(Marionette, _, $);
