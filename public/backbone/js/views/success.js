/*global BackboneWizard, TemplateManager, Backbone, _, $*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.SuccessView = Backbone.View.extend({

        template: 'js/templates/success.html',

        className: 'row',

        render: function () {
            var view = this;

            BackboneWizard.templateManager.template( view.template )
                .done(function (content) {
                    view.$el.html( content( view.model.attributes ) );
                });

            return this;
        }

    });

})();
