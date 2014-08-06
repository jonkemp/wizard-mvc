/*global BackboneWizard, Marionette, Backbone, _, $*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.SuccessView = Marionette.ItemView.extend({

        template: '#success-template',

        className: 'row'

    });

})();
