/*global BackboneWizard, Backbone*/

BackboneWizard.Routers = BackboneWizard.Routers || {};

(function () {
    'use strict';

    BackboneWizard.Routers.WizardRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'verify': 'showVerify',
            'payment': 'showPayment',
            'success': 'showSuccess'
        },

        index: function () {
            BackboneWizard.Controllers.WizardController.index();
        },

        showVerify: function () {
            BackboneWizard.Controllers.WizardController.showVerify();
        },

        showPayment: function () {
            BackboneWizard.Controllers.WizardController.showPayment();
        },

        showSuccess: function () {
            BackboneWizard.Controllers.WizardController.showSuccess();
        }
    });

})();
