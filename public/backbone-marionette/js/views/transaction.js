/*global Wizard, app, Marionette*/
'use strict';

app.module('Views', function (Views, app, Backbone, Marionette, $, _, Wizard) {

    this.TransactionView = Marionette.CompositeView.extend({

        template: 'transaction',

        childView: app.Views.ItemView,

        childViewContainer: '#item-list',

        className: 'row',

        events: {
            'click #next': 'nextStep'
        },

        nextStep: function (event) {
            event.preventDefault();

            Wizard.state = 'verify';
            this.trigger('wizard:verify');
        }

    });

}, Wizard);
