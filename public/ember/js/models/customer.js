/*global Wizard, DS, Ember*/

Wizard.Customer = DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    zipcode: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    ccName: DS.attr('string'),
    ccType: DS.attr('string'),
    ccNumber: DS.attr('string'),
    ccExpDate: DS.attr('string'),
    ccSecurityCode: DS.attr('string'),
    transactions: DS.hasMany('transaction')
});

Wizard.Customer.FIXTURES = [];
