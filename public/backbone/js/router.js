/*global Wizard, Backbone*/

Wizard.Routers = Wizard.Routers || {};

(function () {
    'use strict';

    Wizard.Routers.WizardRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'verify': 'showVerify',
            'payment': 'showPayment',
            'success': 'showSuccess'
        },

        index: function () {
            Wizard.Controllers.WizardController.index();
        },

        showVerify: function () {
            Wizard.Controllers.WizardController.showVerify();
        },

        showPayment: function () {
            Wizard.Controllers.WizardController.showPayment();
        },

        showSuccess: function () {
            Wizard.Controllers.WizardController.showSuccess();
        }
    });

})();
