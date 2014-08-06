/*global BackboneWizard, Backbone, Marionette, _, $*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.ListView = Marionette.CompositeView.extend({

        template: '#item-list-template',

        childView: BackboneWizard.Views.ItemView,

        childViewContainer: '#item-list',

        className: 'row',

        events: {
            'click #next': 'nextStep'
        },

        nextStep: function (event) {
            event.preventDefault();

            this.model.set({ items: this.collection.toJSON() });

            BackboneWizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

})();
