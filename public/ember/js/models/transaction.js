/*global Wizard, DS, Ember*/

Wizard.Transaction = DS.Model.extend({
    items: DS.hasMany({ async: true }),
    customer: DS.belongsTo({ async: true })
});

Wizard.Transaction.FIXTURES = [];
