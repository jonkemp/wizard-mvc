/*global BackboneWizard, Backbone, _*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.SuccessView = Backbone.View.extend({

        template: _.template( $('#success-template').html() ),

        className: 'row',

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }

    });

})();
