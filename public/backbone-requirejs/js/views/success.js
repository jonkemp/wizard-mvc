/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/success.html'
], function ($, _, Backbone, successTemplate) {
    'use strict';

    var SuccessView = Backbone.View.extend({

        template: _.template( successTemplate ),

        className: 'row',

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }

    });

    return SuccessView;
});
