/*global Wizard, Backbone*/

Wizard.Models = Wizard.Models || {};

(function () {
    'use strict';

    Wizard.Models.Item = Backbone.Model.extend({

        defaults: {
            'name': '',
            'description': '',
            'quantity': '',
            'price': '',
            'transaction': null
        }
    });

})();
