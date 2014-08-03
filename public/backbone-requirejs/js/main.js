/* global require */
'use strict';

require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'backbone.stickit': '../bower_components/backbone.stickit/backbone.stickit',
        'text': '../bower_components/requirejs-text/text'
    }
});

require([
    'backbone',
    'jquery',
    'collections/item-list',
    'models/transaction',
    'router',
    'app'
], function (Backbone, $, ItemList, Transaction, WizardRouter, backboneWizard) {

    // Add close method
    Backbone.View.prototype.close = function () {
        this.remove();
        this.off();
    };

    backboneWizard.itemList = new ItemList();
    backboneWizard.transaction = new Transaction();
    backboneWizard.state = 'index';

    $.get('./appData.json').done(function (data) {
        backboneWizard.transaction.set(data);
    });

    $.get('./itemData.json').done(function (data) {
        backboneWizard.itemList.add(data, { merge: true });
    });

    backboneWizard.wizardRouter = new WizardRouter();

    Backbone.history.start({ root: '/backbone-requirejs/' });
});
