/*global Wizard, Backbone*/

Wizard.Models = Wizard.Models || {};

(function () {
    'use strict';

    Wizard.Models.Customer = Backbone.Model.extend({

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

})();
