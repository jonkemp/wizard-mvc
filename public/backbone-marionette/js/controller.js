/*global Wizard, app, Marionette, $*/
'use strict';

app.module('Controllers', function (Controllers, app, Backbone, Marionette, $, _, Wizard) {

    this.WizardController = Marionette.Controller.extend({

        index: function () {
            this.transaction(1);
        },

        transaction: function (transaction_id) {
            if (Wizard.state !== 'success') {
                var controller = this,
                    itemList,
                    transaction = Wizard.transactionList.findWhere({ id: Number( transaction_id ) }),
                    customer_id = transaction.get('customer');

                Wizard.wizardRouter.navigate('transaction/' + transaction_id);

                itemList = new app.Collections.ItemList();

                itemList.fetch().done(function (response) {
                    var data = _.where(response, { transaction: Number( transaction_id ) });

                    var transactionView = controller.currentView = new app.Views.TransactionView({
                        model: transaction,
                        collection: new app.Collections.ItemList( data )
                    });

                    transactionView.on('wizard:verify', function () {
                        this.customer(transaction_id, customer_id);
                    }, controller);

                    $.when(
                        controller.templateManager.template('transaction'),
                        controller.templateManager.template('item')
                    ).done(function () {
                        app.wizard.show(transactionView);

                        // Pre-load remaining templates
                        controller.templateManager.template('customer');
                        controller.templateManager.template('payment');
                        controller.templateManager.template('success');
                    });
                });
            } else {
                this.success(transaction_id);
            }
        },

        customer: function (transaction_id, customer_id) {
            if (Wizard.state !== 'success') {
                var controller = this,
                    customerList;

                Wizard.wizardRouter.navigate('transaction/' + transaction_id + '/customer/' + customer_id);

                customerList = new app.Collections.CustomerList();

                customerList.fetch().done(function (response) {
                    var data = _.findWhere(response, { id: Number( customer_id ) });

                    var customerView = controller.currentView = new app.Views.CustomerView({
                        model: new app.Models.Customer( _.extend(data, { 'transaction_id': transaction_id }) )
                    });

                    customerView.on('wizard:payment', function () {
                        this.payment(transaction_id, customer_id);
                    }, controller);

                    customerView.on('wizard:transaction', function () {
                        this.transaction(transaction_id);
                    }, controller);

                    $.when(
                        controller.templateManager.template('customer')
                    ).done(function () {
                        app.wizard.show(customerView);
                    });
                });
            } else {
                this.success(transaction_id);
            }
        },

        payment: function (transaction_id, customer_id) {
            if (Wizard.state !== 'success') {
                var controller = this,
                    customerList;

                Wizard.wizardRouter.navigate('transaction/' + transaction_id + '/customer/' + customer_id + '/payment');

                customerList = new app.Collections.CustomerList();

                customerList.fetch().done(function (response) {
                    var data = _.findWhere(response, { id: Number( customer_id ) });

                    var paymentView = controller.currentView = new app.Views.PaymentView({
                        model: new app.Models.Customer( _.extend(data, { 'transaction_id': transaction_id }) )
                    });

                    paymentView.on('wizard:success', function () {
                        this.success( transaction_id );
                    }, controller);

                    paymentView.on('wizard:verify', function () {
                        this.customer( transaction_id, customer_id );
                    }, controller);

                    $.when(
                        controller.templateManager.template('payment')
                    ).done(function () {
                        app.wizard.show(paymentView);
                    });
                });
            } else {
                this.success(transaction_id);
            }
        },

        success: function (transaction_id) {
            var controller = this,
                state = Wizard.state,
                itemList,
                customerList,
                transaction = Wizard.transactionList.findWhere({ id: Number( transaction_id ) }),
                customer_id = transaction.get('customer');

            if (state === 'success') {
                Wizard.wizardRouter.navigate('transaction/' + transaction_id + '/success');

                itemList = new app.Collections.ItemList();

                itemList.fetch().done(function (response) {
                    var items = _.where(response, { transaction: Number( transaction_id ) });

                    customerList = new app.Collections.CustomerList();

                    customerList.fetch().done(function (response) {
                        var customer = _.findWhere(response, { id: Number( customer_id ) });
                        var successModel = new Backbone.Model({
                            'items': items,
                            'customer': customer
                        });
                        var successView = controller.currentView = new app.Views.SuccessView({ model: successModel });

                        $.when(
                            controller.templateManager.template('success')
                        ).done(function () {
                            app.wizard.show(successView);
                        });
                    });
                });
            }

            if (state === 'index') {
                this.transaction(transaction_id);
            }

            if (state === 'verify') {
                this.customer(transaction_id, customer_id);
            }

            if (state === 'payment') {
                this.payment(transaction_id, customer_id);
            }
        },

        templateManager: new Marionette.TemplateManager()

    });
}, Wizard);
