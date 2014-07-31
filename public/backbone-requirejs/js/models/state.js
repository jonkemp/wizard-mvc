/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var State = Backbone.Model.extend({

        defaults: {
            'current': ''
        }
    });

    return State;
});
