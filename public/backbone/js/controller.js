/*global $, Wizard*/

Wizard.Controllers = Wizard.Controllers || {};

(function () {
    'use strict';

    Wizard.Controllers.WizardController = {

        index: function () {
            if (Wizard.state !== 'success') {
                if (this.currentView) {
                    this.currentView.close();
                }

                Wizard.wizardRouter.navigate('#/');

                this.itemView = this.currentView = new Wizard.Views.ItemView({ model: Wizard.transaction, collection: Wizard.itemList });

                this.itemView.on('wizard:verify', this.showVerify, this);

                $('#wizard').html(this.itemView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showVerify: function () {
            if (Wizard.state !== 'success') {
                if (this.currentView) {
                    this.currentView.close();
                }

                Wizard.wizardRouter.navigate('#/verify');

                this.customerView = this.currentView = new Wizard.Views.CustomerView({ model: Wizard.transaction });

                this.customerView.on('wizard:payment', this.showPayment, this);
                this.customerView.on('wizard:index', this.index, this);

                $('#wizard').html(this.customerView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showPayment: function () {
            if (Wizard.state !== 'success') {
                if (this.currentView) {
                    this.currentView.close();
                }

                Wizard.wizardRouter.navigate('#/payment');

                this.paymentView = this.currentView = new Wizard.Views.PaymentView({ model: Wizard.transaction });

                this.paymentView.on('wizard:success', this.showSuccess, this);
                this.paymentView.on('wizard:verify', this.showVerify, this);

                $('#wizard').html(this.paymentView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showSuccess: function () {
            var state = Wizard.state;

            if (state === 'success') {
                this.currentView.close();

                Wizard.wizardRouter.navigate('#/success');

                this.successView = this.currentView = new Wizard.Views.SuccessView({ model: Wizard.transaction });
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
