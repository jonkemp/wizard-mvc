/*global BackboneWizard, Backbone, Marionette, _, $*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.ItemView = Marionette.ItemView.extend({

        tagName: 'tr',

        template: '#item-template'

    });

})();
