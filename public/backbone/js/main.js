/* global BackboneWizard, TemplateManager, Backbone, $ */

// Add close method
Backbone.View.prototype.close = function () {
    this.remove();
    this.off();
};

window.BackboneWizard = {
    Models: {},
    Collections: {},
    Views: {},
    Controllers: {},
    Routers: {},
    init: function () {
        'use strict';

        var self = this;

        TemplateManager.template('js/templates/item.html');
        TemplateManager.template('js/templates/customer.html');
        TemplateManager.template('js/templates/payment.html');
        TemplateManager.template('js/templates/success.html');

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
