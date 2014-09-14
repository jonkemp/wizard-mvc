/*global Wizard, TemplateManager, Backbone, _, $*/

Wizard.Views = Wizard.Views || {};

(function () {
    'use strict';

    Wizard.Views.SuccessView = Backbone.View.extend({

        template: 'js/templates/success.html',

        className: 'row',

        render: function () {
            var view = this;

            Wizard.templateManager.template( view.template )
                .done(function (content) {
                    view.$el.html( content( view.model.attributes ) );
                });

            return this;
        }

    });

})();
