/*global Backbone, app*/
'use strict';

app.module('Collections', function (Collections, app, Backbone) {
    this.TransactionList = Backbone.Collection.extend({

        model: app.Models.Transaction,

        url: '/backbone-marionette/transactionData.json'

    });
});
