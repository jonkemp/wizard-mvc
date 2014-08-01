/* global BackboneWizard, Backbone, $ */


window.BackboneWizard = {
    Models: {},
    Collections: {},
    Views: {},
    Controllers: {},
    Routers: {},
    init: function () {
        'use strict';

        var self = this;

        self.itemList = new BackboneWizard.Collections.ItemList();
        self.transaction = new BackboneWizard.Models.Transaction();
        self.state = 'index';

        $.get('./appData.json').done(function (data) {
            self.transaction.set(data);
        });

        $.get('./itemData.json').done(function (data) {
            self.itemList.add(data, { merge: true });
        });

        self.wizardRouter = new BackboneWizard.Routers.WizardRouter();

        Backbone.history.start({ root: '/backbone/' });
    }
};

$(document).ready(function () {
    'use strict';
    BackboneWizard.init();
});
