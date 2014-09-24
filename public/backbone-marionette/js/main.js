/* global Wizard, Marionette, Backbone, $ */

window.Wizard = {};

var app = new Marionette.Application();

app.addRegions({
    wizard: '#wizard'
});

app.addInitializer(function () {

    Wizard.transactionList = new app.Collections.TransactionList();

    Wizard.transactionList.fetch().done(function () {
        var wizardController = new app.Controllers.WizardController();

        Wizard.state = 'index';

        Wizard.wizardRouter = new app.Routers.WizardRouter({
            controller: wizardController
        });

        Backbone.history.start({ root: '/backbone-marionette/' });
    });
});
