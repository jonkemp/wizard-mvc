/*global BackboneWizard, Backbone, _*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.ItemView = Backbone.View.extend({

        template: _.template( $('#item-template').html() ),

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

            BackboneWizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

})();
