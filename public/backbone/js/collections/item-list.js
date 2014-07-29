/*global BackboneWizard, Backbone*/

BackboneWizard.Collections = BackboneWizard.Collections || {};

(function () {
    'use strict';

    BackboneWizard.Collections.ItemList = Backbone.Collection.extend({

        model: BackboneWizard.Models.Item

    });

})();
