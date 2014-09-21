/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Customer = Backbone.Model.extend({

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

    return Customer;
});
