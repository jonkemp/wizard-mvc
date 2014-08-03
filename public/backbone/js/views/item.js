/*global BackboneWizard, TemplateManager, Backbone, _, $*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.ItemView = Backbone.View.extend({

        template: 'js/templates/item.html',

        className: 'row',

        events: {
            'click #next': 'nextStep'
        },

        initialize: function () {
            this.listenTo(this.collection, 'add', this.render);
        },

        render: function () {
            var view = this;

            TemplateManager.template( view.template )
                .done(function (content) {
                    view.$el.html( content({ items: view.collection.toJSON() }) );
                });

            return this;
        },

        nextStep: function (event) {
            event.preventDefault();

            this.model.set({ items: this.collection.toJSON() });

            BackboneWizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

})();
