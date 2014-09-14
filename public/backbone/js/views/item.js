/*global Wizard, TemplateManager, Backbone, _, $*/

Wizard.Views = Wizard.Views || {};

(function () {
    'use strict';

    Wizard.Views.ItemView = Backbone.View.extend({

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

            Wizard.templateManager.template( view.template )
                .done(function (content) {
                    view.$el.html( content({ items: view.collection.toJSON() }) );
                });

            return this;
        },

        nextStep: function (event) {
            event.preventDefault();

            this.model.set({ items: this.collection.toJSON() });

            Wizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

})();
