/* global BackboneWizard, Marionette, Backbone, $ */

window.BackboneWizard = {};

var app = new Marionette.Application();

app.addRegions({
    wizard: '#wizard'
});

app.addInitializer(function () {
    var wizardController = new app.Controllers.WizardController();

    BackboneWizard.itemList = new app.Collections.ItemList();
    BackboneWizard.transaction = new app.Models.Transaction();
    BackboneWizard.state = 'index';

    $.get('./appData.json').done(function (data) {
        BackboneWizard.transaction.set(data);
    });

    $.get('./itemData.json').done(function (data) {
        BackboneWizard.itemList.add(data, { merge: true });
    });

    BackboneWizard.wizardRouter = new app.Routers.WizardRouter({
        controller: wizardController
    });

    Backbone.history.start();
});
