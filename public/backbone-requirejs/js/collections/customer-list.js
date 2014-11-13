/*global define*/

define([
    'underscore',
    'backbone',
    'models/customer'
], function (_, Backbone, Customer) {
    'use strict';

    var CustomerList = Backbone.Collection.extend({

        model: Customer,

        url: '/data/appData.json'

    });

    return CustomerList;
});
