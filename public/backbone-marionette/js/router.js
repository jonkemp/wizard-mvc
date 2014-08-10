/*global Marionette, app*/
'use strict';

app.module('Routers', function (Routers, app, Backbone, Marionette) {

    this.WizardRouter = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'index',
            'verify': 'showVerify',
            'payment': 'showPayment',
            'success': 'showSuccess'
        }
    });

});
