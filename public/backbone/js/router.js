/*global Wizard, Backbone*/

Wizard.Routers = Wizard.Routers || {};

(function () {
    'use strict';

    Wizard.Routers.WizardRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'transaction/:transaction_id': 'transaction',
            'transaction/:transaction_id/customer/:customer_id': 'customer',
            'transaction/:transaction_id/customer/:customer_id/payment': 'payment',
            'transaction/:transaction_id/success': 'success'
        },

        index: function () {
            Wizard.Controllers.WizardController.index();
        },

        transaction: function (transaction_id) {
            Wizard.Controllers.WizardController.transaction( transaction_id );
        },

        customer: function (transaction_id, customer_id) {
            Wizard.Controllers.WizardController.customer( transaction_id, customer_id );
        },

        payment: function (transaction_id, customer_id) {
            Wizard.Controllers.WizardController.payment( transaction_id, customer_id );
        },

        success: function (transaction_id) {
            Wizard.Controllers.WizardController.success( transaction_id );
        }
    });

})();
