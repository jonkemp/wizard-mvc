/*global BackboneWizard, Backbone*/

BackboneWizard.Models = BackboneWizard.Models || {};

(function () {
    'use strict';

    BackboneWizard.Models.Item = Backbone.Model.extend({

        defaults: {
            'name': '',
            'description': '',
            'quantity': '',
            'price': ''
        }
    });

})();
