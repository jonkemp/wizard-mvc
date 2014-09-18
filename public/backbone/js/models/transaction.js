/*global Wizard, Backbone*/

Wizard.Models = Wizard.Models || {};

(function () {
    'use strict';

    Wizard.Models.Transaction = Backbone.Model.extend({

        defaults: {
            'items': null,
            'customer': null
        }
    });

})();
