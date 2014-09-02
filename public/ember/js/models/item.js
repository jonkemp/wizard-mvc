/*global Wizard, DS, Ember*/

Wizard.Item = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    quantity: DS.attr('string'),
    price: DS.attr('string'),
    transaction: DS.belongsTo('transaction')
});

Wizard.Item.FIXTURES = [];
