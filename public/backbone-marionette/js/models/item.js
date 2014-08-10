/*global Backbone, app*/
'use strict';

app.module('Models', function (Models, app, Backbone) {
    this.Item = Backbone.Model.extend({

        defaults: {
            'name': '',
            'description': '',
            'quantity': '',
            'price': ''
        }
    });
});
