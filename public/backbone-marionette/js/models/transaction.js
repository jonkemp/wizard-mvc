/*global Backbone, app*/
'use strict';

app.module('Models', function (Models, app, Backbone) {
    this.Transaction = Backbone.Model.extend({

        defaults: {
            'name': '',
            'address': '',
            'city': '',
            'state': '',
            'zipcode': '',
            'email': '',
            'phone': '',
            'ccName': '',
            'ccType': '',
            'ccNumber': '',
            'ccExpDate': '',
            'ccSecurityCode': '',
            'items': []
        }
    });
});
