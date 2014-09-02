/* global $, Ember, Wizard */

Wizard.Router.map(function () {
    this.resource('transactions');
    this.resource('transaction', {path: '/transaction/:transaction_id'}, function () {
        this.resource('customers');
        this.resource('customer', {path: '/customer/:customer_id'}, function () {
            this.route('payment');
        });
        this.route('success');
    });
});

Wizard.IndexRoute = Ember.Route.extend({
    beforeModel: function () {
        this.transitionTo('transaction.index', 1);
    }
});

Wizard.TransactionIndexRoute = Ember.Route.extend({
    beforeModel: function () {
        if (Wizard.State.get('state') === 'success') {
            this.transitionTo('transaction.success');
        }
    }
});

Wizard.CustomerIndexRoute = Ember.Route.extend({
    beforeModel: function () {
        if (Wizard.State.get('state') === 'success') {
            this.transitionTo('transaction.success');
        }
    }
});

Wizard.CustomerPaymentRoute = Ember.Route.extend({
    beforeModel: function () {
        if (Wizard.State.get('state') === 'success') {
            this.transitionTo('transaction.success');
        }
    }
});

Wizard.TransactionSuccessRoute = Ember.Route.extend({
    afterModel: function (transaction) {
        if (Wizard.State.get('state') === 'index') {
            this.transitionTo('transaction.index');
        }

        if (Wizard.State.get('state') === 'verify') {
            this.transitionTo('customer.index', transaction.get('customer'));
        }

        if (Wizard.State.get('state') === 'payment') {
            this.transitionTo('customer.payment', transaction.get('customer'));
        }
    }
});
