/*global Backbone, app*/
'use strict';

app.module('Collections', function (Collections, app, Backbone) {
    this.CustomerList = Backbone.Collection.extend({

        model: app.Models.Customer,

        url: '/backbone-marionette/appData.json'

    });
});
