/* global Wizard, TemplateManager, Backbone, _, $ */

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

        var _this = this;

        _this.templateManager = new TemplateManager();
        _this.templateManager.template('js/templates/transaction.html');
        _this.templateManager.template('js/templates/customer.html');
        _this.templateManager.template('js/templates/payment.html');
        _this.templateManager.template('js/templates/success.html');

        _this.transactionList = new Wizard.Collections.TransactionList();
        _this.transactionList.fetch().done(function () {
            _this.state = 'index';

            _this.wizardRouter = new Wizard.Routers.WizardRouter();

            Backbone.history.start({ root: '/backbone/' });
        });
    }
};

$(function () {
    'use strict';
    Wizard.init();
});
