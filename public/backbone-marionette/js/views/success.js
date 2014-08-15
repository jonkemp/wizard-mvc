/*global Marionette, app*/
'use strict';

app.module('Views', function (Views, app, Backbone, Marionette) {

    this.SuccessView = Marionette.ItemView.extend({

        template: 'success',

        className: 'row'

    });

});
