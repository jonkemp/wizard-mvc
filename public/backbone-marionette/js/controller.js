/*global BackboneWizard, app, $*/

BackboneWizard.Controllers = BackboneWizard.Controllers || {};

(function () {
    'use strict';

    BackboneWizard.Controllers.WizardController = {

        index: function () {
            if (BackboneWizard.state !== 'success') {

                BackboneWizard.wizardRouter.navigate('#/');

                var itemView = new BackboneWizard.Views.ListView({ model: BackboneWizard.transaction, collection: BackboneWizard.itemList });

                itemView.on('wizard:verify', this.showVerify, this);

                app.wizard.show(itemView);
            } else {
                this.showSuccess();
            }
        },

        showVerify: function () {
            if (BackboneWizard.state !== 'success') {

                BackboneWizard.wizardRouter.navigate('#/verify');

                var customerView = new BackboneWizard.Views.CustomerView({ model: BackboneWizard.transaction });

                customerView.on('wizard:payment', this.showPayment, this);
                customerView.on('wizard:index', this.index, this);

                app.wizard.show(customerView);
            } else {
                this.showSuccess();
            }
        },

        showPayment: function () {
            if (BackboneWizard.state !== 'success') {

                BackboneWizard.wizardRouter.navigate('#/payment');

                var paymentView = new BackboneWizard.Views.PaymentView({ model: BackboneWizard.transaction });

                paymentView.on('wizard:success', this.showSuccess, this);
                paymentView.on('wizard:verify', this.showVerify, this);

                app.wizard.show(paymentView);
            } else {
                this.showSuccess();
            }
        },

        showSuccess: function () {
            var state = BackboneWizard.state;

            if (state === 'success') {

                BackboneWizard.wizardRouter.navigate('#/success');

                var successView = new BackboneWizard.Views.SuccessView({ model: BackboneWizard.transaction });

                app.wizard.show(successView);
            }

            if (state === 'index') {
                this.index();
            }

            if (state === 'verify') {
                this.showVerify();
            }

            if (state === 'payment') {
                this.showPayment();
            }
        }

    };
})();
