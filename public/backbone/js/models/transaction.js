/*global Wizard, Backbone*/

Wizard.Models = Wizard.Models || {};

(function () {
    'use strict';

    Wizard.Models.Transaction = Backbone.Model.extend({

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

})();
