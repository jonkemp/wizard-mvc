/*global Wizard, Backbone*/

Wizard.Collections = Wizard.Collections || {};

(function () {
    'use strict';

    Wizard.Collections.ItemList = Backbone.Collection.extend({

        model: Wizard.Models.Item

    });

})();
