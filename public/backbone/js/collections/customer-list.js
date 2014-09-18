/*global Wizard, Backbone*/

Wizard.Collections = Wizard.Collections || {};

(function () {
    'use strict';

    Wizard.Collections.CustomerList = Backbone.Collection.extend({

        model: Wizard.Models.Customer,

        url: '/backbone/appData.json'

    });

})();
