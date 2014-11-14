/*global $, _, Backbone, Wizard*/

Wizard.Controllers = Wizard.Controllers || {};

(function () {
    'use strict';

    Wizard.Controllers.WizardController = {

        index: function () {
            this.transaction(1);
        },

        transaction: function (transaction_id) {
            if (Wizard.state !== 'success') {
                var controller = this,
                    itemList,
                    transaction = Wizard.transactionList.findWhere({ id: Number( transaction_id ) }),
                    customer_id = transaction.get('customer');

                if (controller.currentView) {
                    controller.currentView.close();
                }

                Wizard.wizardRouter.navigate('transaction/' + transaction_id, {trigger: false});

                itemList = new Wizard.Collections.ItemList();

                itemList.fetch().done(function (response) {
                    var data = _.where(response, { transaction: Number( transaction_id ) });

                    var transactionView = controller.currentView = new Wizard.Views.TransactionView({
                        model: transaction,
                        collection: new Wizard.Collections.ItemList( data )
                    });

                    transactionView.on('wizard:verify', function () {
                        this.customer(transaction_id, customer_id);
                    }, controller);

                    $('#wizard').html( transactionView.render().el );
                });
            } else {
                this.success(transaction_id);
            }
        },

        customer: function (transaction_id, customer_id) {
            if (Wizard.state !== 'success') {
                var controller = this,
                    customerList;

                if (controller.currentView) {
                    controller.currentView.close();
                }

                Wizard.wizardRouter.navigate('transaction/' + transaction_id + '/customer/' + customer_id, {trigger: false});

                customerList = new Wizard.Collections.CustomerList();

                customerList.fetch().done(function (response) {
                    var data = _.findWhere(response, { id: Number( customer_id ) });

                    var customerView = controller.currentView = new Wizard.Views.CustomerView({
                        model: new Wizard.Models.Customer( _.extend(data, { 'transaction_id': transaction_id }) )
                    });

                    customerView.on('wizard:payment', function () {
                        this.payment(transaction_id, customer_id);
                    }, controller);

                    customerView.on('wizard:transaction', function () {
                        this.transaction(transaction_id);
                    }, controller);

                    $('#wizard').html( customerView.render().el );
                });
            } else {
                this.success(transaction_id);
            }
        },

        payment: function (transaction_id, customer_id) {
            if (Wizard.state !== 'success') {
                var controller = this,
                    customerList;

                if (controller.currentView) {
                    controller.currentView.close();
                }

                Wizard.wizardRouter.navigate('transaction/' + transaction_id + '/customer/' + customer_id + '/payment');

                customerList = new Wizard.Collections.CustomerList();

                customerList.fetch().done(function (response) {
                    var data = _.findWhere(response, { id: Number( customer_id ) });

                    var paymentView = controller.currentView = new Wizard.Views.PaymentView({
                        model: new Wizard.Models.Customer( _.extend(data, { 'transaction_id': transaction_id }) )
                    });

                    paymentView.on('wizard:success', function () {
                        this.success( transaction_id );
                    }, controller);

                    paymentView.on('wizard:verify', function () {
                        this.customer( transaction_id, customer_id );
                    }, controller);

                    $('#wizard').html( paymentView.render().el );
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
                controller.currentView.close();

                Wizard.wizardRouter.navigate('transaction/' + transaction_id + '/success');

                itemList = new Wizard.Collections.ItemList();

                itemList.fetch().done(function (response) {
                    var items = _.where(response, { transaction: Number( transaction_id ) });

                    customerList = new Wizard.Collections.CustomerList();

                    customerList.fetch().done(function (response) {
                        var customer = _.findWhere(response, { id: Number( customer_id ) });
                        var successModel = new Backbone.Model({
                            'items': items,
                            'customer': customer
                        });
                        var successView = controller.currentView = new Wizard.Views.SuccessView({ model: successModel });
                        $('#wizard').html( successView.render().el );
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
        }

    };
})();
