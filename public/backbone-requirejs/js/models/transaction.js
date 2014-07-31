/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Transaction = Backbone.Model.extend({

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

    return Transaction;
});
