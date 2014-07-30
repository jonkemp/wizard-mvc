/*global $, BackboneWizard*/

BackboneWizard.Controllers = BackboneWizard.Controllers || {};

(function () {
    'use strict';

    BackboneWizard.Controllers.WizardController = {

        index: function () {
            if (BackboneWizard.state.get('current') !== 'success') {
                if (this.currentView) {
                    this.currentView.remove();
                    this.currentView.off();
                }

                BackboneWizard.wizardRouter.navigate('#/');

                this.itemView = this.currentView = new BackboneWizard.Views.ItemView({ model: BackboneWizard.transaction, collection: BackboneWizard.itemList });

                this.itemView.on('wizard:verify', this.showVerify, this);

                $('#wizard').html(this.itemView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showVerify: function () {
            if (BackboneWizard.state.get('current') !== 'success') {
                if (this.currentView) {
                    this.currentView.remove();
                    this.currentView.off();
                }

                BackboneWizard.wizardRouter.navigate('#/verify');

                this.customerView = this.currentView = new BackboneWizard.Views.CustomerView({ model: BackboneWizard.transaction });

                this.customerView.on('wizard:payment', this.showPayment, this);
                this.customerView.on('wizard:index', this.index, this);

                $('#wizard').html(this.customerView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showPayment: function () {
            if (BackboneWizard.state.get('current') !== 'success') {
                if (this.currentView) {
                    this.currentView.remove();
                    this.currentView.off();
                }

                BackboneWizard.wizardRouter.navigate('#/payment');

                this.paymentView = this.currentView = new BackboneWizard.Views.PaymentView({ model: BackboneWizard.transaction });

                this.paymentView.on('wizard:success', this.showSuccess, this);
                this.paymentView.on('wizard:verify', this.showVerify, this);

                $('#wizard').html(this.paymentView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showSuccess: function () {
            var state = BackboneWizard.state.get('current');

            if (state === 'success') {
                this.currentView.remove();
                this.currentView.off();

                BackboneWizard.wizardRouter.navigate('#/success');

                this.successView = this.currentView = new BackboneWizard.Views.SuccessView({ model: BackboneWizard.transaction });
                $('#wizard').html(this.successView.render().el);
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
