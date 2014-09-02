/*global Wizard, DS, Ember*/

Wizard.Transaction = DS.Model.extend({
    items: DS.hasMany({ async: true }),
    customer: DS.belongsTo({ async: true })
});

Wizard.Transaction.FIXTURES = [
    {
        "id": 1,
        "items": [ 1, 2, 3 ],
        "customer": 1
    }
];
