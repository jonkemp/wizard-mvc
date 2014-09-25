/*global define*/

define([
    'underscore',
    'backbone',
    'models/transaction'
], function (_, Backbone, Transaction) {
    'use strict';

    var TransactionList = Backbone.Collection.extend({

        model: Transaction,

        url: '/transactionData.json'

    });

    return TransactionList;
});
