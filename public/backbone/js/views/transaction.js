/*global Wizard, TemplateManager, Backbone, _, $*/

Wizard.Views = Wizard.Views || {};

(function () {
    'use strict';

    Wizard.Views.TransactionView = Backbone.View.extend({

        template: 'js/templates/transaction.html',

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
                    view.$el.html( content({
                        items: view.collection.toJSON(),
                        transaction_id: view.model.get('id'),
                        customer_id: view.model.get('customer')
                    }) );
                });

            return this;
        },

        nextStep: function (event) {
            event.preventDefault();

            Wizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

})();
