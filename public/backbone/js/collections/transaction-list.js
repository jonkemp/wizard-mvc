/*global Wizard, Backbone*/

Wizard.Collections = Wizard.Collections || {};

(function () {
    'use strict';

    Wizard.Collections.TransactionList = Backbone.Collection.extend({

        model: Wizard.Models.Transaction,

        url: '/data/transactionData.json'

    });

})();
