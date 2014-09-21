/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/transaction.html',
    'app'
], function ($, _, Backbone, transactionTemplate, backboneWizard) {
    'use strict';

    var TransactionView = Backbone.View.extend({

        template: _.template( transactionTemplate ),

        className: 'row',

        events: {
            'click #next': 'nextStep'
        },

        initialize: function () {
            this.listenTo(this.collection, 'add', this.render);
        },

        render: function () {
            this.$el.html(this.template({
                items: this.collection.toJSON(),
                transaction_id: this.model.get('id'),
                customer_id: this.model.get('customer')
            }));
            return this;
        },

        nextStep: function (event) {
            event.preventDefault();

            backboneWizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

    return TransactionView;
});
