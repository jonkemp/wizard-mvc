/*global BackboneWizard, app, Marionette*/
'use strict';

app.module('Views', function (Views, app, Backbone, Marionette, $, _, BackboneWizard) {

    this.ListView = Marionette.CompositeView.extend({

        template: '#item-list-template',

        childView: app.Views.ItemView,

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

}, BackboneWizard);
