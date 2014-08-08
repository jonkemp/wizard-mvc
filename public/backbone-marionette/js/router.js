/*global BackboneWizard, Marionette*/

BackboneWizard.Routers = BackboneWizard.Routers || {};

(function () {
    'use strict';

    BackboneWizard.Routers.WizardRouter = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'index',
            'verify': 'showVerify',
            'payment': 'showPayment',
            'success': 'showSuccess'
        }
    });

})();
