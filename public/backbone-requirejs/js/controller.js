/*global define*/
'use strict';

define([
    'jquery',
    'views/item',
    'views/customer',
    'views/payment',
    'views/success',
    'app'
], function ($, ItemView, CustomerView, PaymentView, SuccessView, backboneWizard) {
    return {

        index: function () {
            if (backboneWizard.state !== 'success') {
                if (this.currentView) {
                    this.currentView.close();
                }

                backboneWizard.wizardRouter.navigate('#/');

                this.itemView = this.currentView = new ItemView({ model: backboneWizard.transaction, collection: backboneWizard.itemList });

                this.itemView.on('wizard:verify', this.showVerify, this);

                $('#wizard').html(this.itemView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showVerify: function () {
            if (backboneWizard.state !== 'success') {
                if (this.currentView) {
                    this.currentView.close();                }

                backboneWizard.wizardRouter.navigate('#/verify');

                this.customerView = this.currentView = new CustomerView({ model: backboneWizard.transaction });

                this.customerView.on('wizard:payment', this.showPayment, this);
                this.customerView.on('wizard:index', this.index, this);

                $('#wizard').html(this.customerView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showPayment: function () {
            if (backboneWizard.state !== 'success') {
                if (this.currentView) {
                    this.currentView.close();
                }

                backboneWizard.wizardRouter.navigate('#/payment');

                this.paymentView = this.currentView = new PaymentView({ model: backboneWizard.transaction });

                this.paymentView.on('wizard:success', this.showSuccess, this);
                this.paymentView.on('wizard:verify', this.showVerify, this);

                $('#wizard').html(this.paymentView.render().el);
            } else {
                this.showSuccess();
            }
        },

        showSuccess: function () {
            var state = backboneWizard.state;

            if (state === 'success') {
                this.currentView.close();

                backboneWizard.wizardRouter.navigate('#/success');

                this.successView = this.currentView = new SuccessView({ model: backboneWizard.transaction });
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
});
