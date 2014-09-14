/* global Wizard, TemplateManager, Backbone, $ */

// Add close method
Backbone.View.prototype.close = function () {
    this.remove();
    this.off();
};

window.Wizard = {
    Models: {},
    Collections: {},
    Views: {},
    Controllers: {},
    Routers: {},
    init: function () {
        'use strict';

        var self = this;

        self.templateManager = new TemplateManager();
        self.templateManager.template('js/templates/item.html');
        self.templateManager.template('js/templates/customer.html');
        self.templateManager.template('js/templates/payment.html');
        self.templateManager.template('js/templates/success.html');

        self.itemList = new Wizard.Collections.ItemList();
        self.transaction = new Wizard.Models.Transaction();
        self.state = 'index';

        $.get('./appData.json').done(function (data) {
            self.transaction.set(data);
        });

        $.get('./itemData.json').done(function (data) {
            self.itemList.add(data, { merge: true });
        });

        self.wizardRouter = new Wizard.Routers.WizardRouter();

        Backbone.history.start({ root: '/backbone/' });
    }
};

$(document).ready(function () {
    'use strict';
    Wizard.init();
});
