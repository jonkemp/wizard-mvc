/*global define*/
define([
    'jquery',
    'backbone',
    'controller'
], function ($, Backbone, wizardController) {
    'use strict';

    var WizardRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'transaction/:transaction_id': 'transaction',
            'transaction/:transaction_id/customer/:customer_id': 'customer',
            'transaction/:transaction_id/customer/:customer_id/payment': 'payment',
            'transaction/:transaction_id/success': 'success'
        },

        index: function () {
            wizardController.index();
        },

        transaction: function (transaction_id) {
            wizardController.transaction( transaction_id );
        },

        customer: function (transaction_id, customer_id) {
            wizardController.customer( transaction_id, customer_id );
        },

        payment: function (transaction_id, customer_id) {
            wizardController.payment( transaction_id, customer_id );
        },

        success: function (transaction_id) {
            wizardController.success( transaction_id );
        }
    });

    return WizardRouter;
});
