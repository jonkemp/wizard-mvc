/*global Backbone, app*/
'use strict';

app.module('Collections', function (Collections, app, Backbone) {
    this.ItemList = Backbone.Collection.extend({

        model: app.Models.Item

    });
});
