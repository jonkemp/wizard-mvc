/*global BackboneWizard, Backbone*/

BackboneWizard.Models = BackboneWizard.Models || {};

(function () {
    'use strict';

    BackboneWizard.Models.State = Backbone.Model.extend({

        defaults: {
            'current': ''
        }
    });

})();
