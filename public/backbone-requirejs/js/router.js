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
            'verify': 'showVerify',
            'payment': 'showPayment',
            'success': 'showSuccess'
        },

        index: function () {
            wizardController.index();
        },

        showVerify: function () {
            wizardController.showVerify();
        },

        showPayment: function () {
            wizardController.showPayment();
        },

        showSuccess: function () {
            wizardController.showSuccess();
        }
    });

    return WizardRouter;
});
