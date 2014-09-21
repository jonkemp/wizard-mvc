/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Transaction = Backbone.Model.extend({

        defaults: {
            'items': null,
            'customer': null
        }
    });

    return Transaction;
});
