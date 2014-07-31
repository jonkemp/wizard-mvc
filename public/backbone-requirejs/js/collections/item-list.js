/*global define*/
define([
    'underscore',
    'backbone',
    'models/item'
], function (_, Backbone, Item) {
    'use strict';

    var ItemList = Backbone.Collection.extend({

        model: Item

    });

    return ItemList;
});
