/*global Backbone, app*/
'use strict';

app.module('Models', function (Models, app, Backbone) {
    this.Transaction = Backbone.Model.extend({

        defaults: {
            'items': null,
            'customer': null
        }
    });
});
