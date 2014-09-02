/* global Ember, Wizard */

Wizard.TransactionIndexController = Ember.ObjectController.extend({
    actions: {
        nextStep: function () {
            Wizard.State.set('state', 'verify');
            this.transitionToRoute('customer.index', this.get('customer'));
        }
    }
});
