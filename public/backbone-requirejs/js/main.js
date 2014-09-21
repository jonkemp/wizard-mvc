/* global require */
'use strict';

require.config({
    paths: {
        'jquery': '/bower_components/jquery/dist/jquery',
        'underscore': '/bower_components/underscore/underscore',
        'backbone': '/bower_components/backbone/backbone',
        'backbone.stickit': '/bower_components/backbone.stickit/backbone.stickit',
        'text': '/bower_components/requirejs-text/text'
    }
});

require([
    'backbone',
    'jquery',
    'collections/transaction-list',
    'router',
    'app'
], function (Backbone, $, TransactionList, WizardRouter, Wizard) {

    // Add close method
    Backbone.View.prototype.close = function () {
        this.remove();
        this.off();
    };

    Wizard.transactionList = new TransactionList();
    Wizard.transactionList.fetch().done(function () {
        Wizard.state = 'index';

        Wizard.wizardRouter = new WizardRouter();

        Backbone.history.start({ root: '/backbone-requirejs/' });
    });
});
