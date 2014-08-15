/*global app, Marionette*/
'use strict';

app.module('Views', function (Views, app, Backbone, Marionette) {

    this.ItemView = Marionette.ItemView.extend({

        tagName: 'tr',

        template: 'item'

    });

});
