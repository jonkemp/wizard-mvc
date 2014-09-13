/* global DS, Ember, $ */
'use strict';

var Wizard = Ember.Application.create({});

Wizard.Router.reopen({
    rootURL: '/ember/'
});

Wizard.State = Ember.Object.create();

Wizard.ApplicationAdapter = DS.FixtureAdapter.extend();

Wizard.initializer({
    name: 'runtimeSideloading',

    initialize: function( container, application ) {

        application.deferReadiness();

        Wizard.State.set('state', 'index');

        $.get('./transactionData.json').done(function (data) {
            var store = container.lookup('store:main');

            for(var i = 0; i < data.length; i++) {
                store.push('transaction', data[i]);
            }

            application.advanceReadiness();
        });

        $.get('./appData.json').done(function (data) {
            var store = container.lookup('store:main');

            for(var i = 0; i < data.length; i++) {
                store.push('customer', data[i]);
            }
        });

        $.get('./itemData.json').done(function (data) {
            var store = container.lookup('store:main');

            for(var i = 0; i < data.length; i++) {
                store.push('item', data[i]);
            }
        });
    }
});
