/*global Backbone, app*/
'use strict';

app.module('Models', function (Models, app, Backbone) {
    this.Customer = Backbone.Model.extend({

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
            'transactions': null,
            'transaction_id': null
        }
    });
});
