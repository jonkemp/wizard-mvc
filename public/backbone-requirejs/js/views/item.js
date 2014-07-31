/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/item.html',
    'app'
], function ($, _, Backbone, itemTemplate, backboneWizard) {
    'use strict';

    var ItemView = Backbone.View.extend({

        template: _.template( itemTemplate ),

        className: 'row',

        events: {
            'click #next': 'nextStep'
        },

        initialize: function () {
            this.listenTo(this.collection, 'add', this.render);
        },

        render: function () {
            this.$el.html(this.template({ items: this.collection.toJSON() }));
            return this;
        },

        nextStep: function (event) {
            event.preventDefault();

            this.model.set({ items: this.collection.toJSON() });

            backboneWizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

    return ItemView;
});
