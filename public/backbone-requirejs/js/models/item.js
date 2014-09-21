/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Item = Backbone.Model.extend({

        defaults: {
            'name': '',
            'description': '',
            'quantity': '',
            'price': '',
            'transaction': null
        }
    });

    return Item;
});
