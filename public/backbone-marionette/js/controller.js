/*global BackboneWizard, app, Marionette, $*/
'use strict';

app.module('Controllers', function (Controllers, app, Backbone, Marionette, $, _, BackboneWizard) {

    this.WizardController = Marionette.Controller.extend({

        index: function () {
            if (BackboneWizard.state !== 'success') {

                BackboneWizard.wizardRouter.navigate('#/');

                var _this = this;

                var itemView = new app.Views.ListView({ model: BackboneWizard.transaction, collection: BackboneWizard.itemList });

                itemView.on('wizard:verify', _this.showVerify, _this);

                $.when(
                    _this.templateManager.template('item-list'),
                    _this.templateManager.template('item')
                ).done(function () {
                    app.wizard.show(itemView);

                    // Pre-load remaining templates
                    _this.templateManager.template('customer');
                    _this.templateManager.template('payment');
                    _this.templateManager.template('success');
                });
            } else {
                this.showSuccess();
            }
        },

        showVerify: function () {
            if (BackboneWizard.state !== 'success') {

                BackboneWizard.wizardRouter.navigate('#/verify');

                var customerView = new app.Views.CustomerView({ model: BackboneWizard.transaction });

                customerView.on('wizard:payment', this.showPayment, this);
                customerView.on('wizard:index', this.index, this);

                $.when(
                    this.templateManager.template('customer')
                ).done(function () {
                    app.wizard.show(customerView);
                });
            } else {
                this.showSuccess();
            }
        },

        showPayment: function () {
            if (BackboneWizard.state !== 'success') {

                BackboneWizard.wizardRouter.navigate('#/payment');

                var paymentView = new app.Views.PaymentView({ model: BackboneWizard.transaction });

                paymentView.on('wizard:success', this.showSuccess, this);
                paymentView.on('wizard:verify', this.showVerify, this);

                $.when(
                    this.templateManager.template('payment')
                ).done(function () {
                    app.wizard.show(paymentView);
                });
            } else {
                this.showSuccess();
            }
        },

        showSuccess: function () {
            //var state = BackboneWizard.state;

            if (BackboneWizard.state === 'success') {

                BackboneWizard.wizardRouter.navigate('#/success');

                var successView = new app.Views.SuccessView({ model: BackboneWizard.transaction });

                $.when(
                    this.templateManager.template('success')
                ).done(function () {
                    app.wizard.show(successView);
                });
            }

            if (BackboneWizard.state === 'index') {
                this.index();
            }

            if (BackboneWizard.state === 'verify') {
                this.showVerify();
            }

            if (BackboneWizard.state === 'payment') {
                this.showPayment();
            }
        },

        templateManager: new Marionette.TemplateManager()

    });
}, BackboneWizard);
