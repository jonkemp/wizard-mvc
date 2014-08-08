/* global BackboneWizard, Marionette, Backbone, $ */

window.BackboneWizard = {
    Models: {},
    Collections: {},
    Views: {},
    Controllers: {},
    Routers: {}
};

var app = new Marionette.Application();

app.addRegions({
    wizard: '#wizard'
});

app.addInitializer(function () {
    BackboneWizard.itemList = new BackboneWizard.Collections.ItemList();
    BackboneWizard.transaction = new BackboneWizard.Models.Transaction();
    BackboneWizard.state = 'index';

    $.get('./appData.json').done(function (data) {
        BackboneWizard.transaction.set(data);
    });

    $.get('./itemData.json').done(function (data) {
        BackboneWizard.itemList.add(data, { merge: true });
    });

    BackboneWizard.wizardController = new BackboneWizard.Controllers.WizardController();

    BackboneWizard.wizardRouter = new BackboneWizard.Routers.WizardRouter({
        controller: BackboneWizard.wizardController
    });

    Backbone.history.start();
});
