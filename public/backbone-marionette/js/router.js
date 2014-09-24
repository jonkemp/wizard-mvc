/*global Marionette, app*/
'use strict';

app.module('Routers', function (Routers, app, Backbone, Marionette) {

    this.WizardRouter = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'index',
            'transaction/:transaction_id': 'transaction',
            'transaction/:transaction_id/customer/:customer_id': 'customer',
            'transaction/:transaction_id/customer/:customer_id/payment': 'payment',
            'transaction/:transaction_id/success': 'success'
        }
    });

});
