/*global define*/
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'models/customer',
    'collections/customer-list',
    'collections/item-list',
    'views/transaction',
    'views/customer',
    'views/payment',
    'views/success',
    'app'
], function ($, _, Backbone, Customer, CustomerList, ItemList, TransactionView, CustomerView, PaymentView, SuccessView, Wizard) {
    return {

        index: function () {
            this.transaction(1);
        },

        transaction: function (transaction_id) {
            if (Wizard.state !== 'success') {
                var controller = this,
                    transaction = Wizard.transactionList.findWhere({ id: Number( transaction_id ) }),
                    customer_id = transaction.get('customer');

                if (controller.currentView) {
                    controller.currentView.close();
                }

                Wizard.wizardRouter.navigate('#/transaction/' + transaction_id);

                var itemList = new ItemList();

                itemList.fetch().done(function (response) {
                    var data = _.where(response, { transaction: Number( transaction_id ) });

                    var transactionView = controller.currentView = new TransactionView({
                        model: transaction,
                        collection: new ItemList( data )
                    });

                    transactionView.on('wizard:verify', function () {
                        controller.customer(transaction_id, customer_id);
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

                Wizard.wizardRouter.navigate('#/transaction/' + transaction_id + '/customer/' + customer_id);

                customerList = new CustomerList();

                customerList.fetch().done(function (response) {
                    var data = _.findWhere(response, { id: Number( customer_id ) });

                    var customerView = controller.currentView = new CustomerView({
                        model: new Customer( _.extend(data, { 'transaction_id': transaction_id }) )
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

                Wizard.wizardRouter.navigate('#/transaction/' + transaction_id + '/customer/' + customer_id + '/payment');

                customerList = new CustomerList();

                customerList.fetch().done(function (response) {
                    var data = _.findWhere(response, { id: Number( customer_id ) });

                    var paymentView = controller.currentView = new PaymentView({
                        model: new Customer( _.extend(data, { 'transaction_id': transaction_id }) )
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

                Wizard.wizardRouter.navigate('#/transaction/' + transaction_id + '/success');

                itemList = new ItemList();

                itemList.fetch().done(function (response) {
                    var items = _.where(response, { transaction: Number( transaction_id ) });

                    customerList = new CustomerList();

                    customerList.fetch().done(function (response) {
                        var customer = _.findWhere(response, { id: Number( customer_id ) });
                        var successModel = new Backbone.Model({
                            'items': items,
                            'customer': customer
                        });
                        var successView = controller.currentView = new SuccessView({ model: successModel });
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
});
