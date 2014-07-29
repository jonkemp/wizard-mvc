/*global BackboneWizard, Backbone, _*/

BackboneWizard.Views = BackboneWizard.Views || {};

(function () {
    'use strict';

    BackboneWizard.Views.PaymentView = Backbone.View.extend({

        template: _.template( $('#payment-template').html() ),

        className: 'row',

        events: {
            'click #next': 'nextStep',
            'click #back': 'previousStep'
        },

        bindings: {
            '#cc-name': 'ccName',
            '#cc-type': 'ccType',
            '#cc-number': 'ccNumber',
            '#cc-exp-date': 'ccExpDate',
            '#cc-security-code': 'ccSecurityCode'
        },

        initialize: function () {
            var view = this;

            function log() {
                console.log(JSON.stringify(view.model.changed));
            }

            var verify = _.debounce(log, 1000);

            view.listenTo(view.model, 'change', verify);
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            this.stickit();
            return this;
        },

        nextStep: function (event) {
            event.preventDefault();

            if (this.validate()) {
                BackboneWizard.state.set({ 'current': 'success' });
                this.trigger('wizard:success');
            }
        },

        previousStep: function (event) {
            event.preventDefault();

            BackboneWizard.state.set({ 'current': 'verify' });
            this.trigger('wizard:verify');
        },

        validate: function() {
            var valid = true,
                $ccName = this.$('#cc-name'),
                $ccType = this.$('#cc-type'),
                $ccNumber = this.$('#cc-number'),
                $ccExpDate = this.$('#cc-exp-date'),
                $ccSecurityCode = this.$('#cc-security-code');

            if ($ccName.val() === '') {
                if (!$ccName.hasClass('error')) {
                    $ccName.addClass('error')
                        .parents('label').addClass('error')
                        .after('<small class="error">Invalid entry</small>');
                }

                valid = false;

            } else {
                if ($ccName.hasClass('error')) {
                    $ccName.removeClass('error')
                        .parents('label').removeClass('error')
                        .next().remove();
                }
            }

            if ($ccType.val() === '') {
                if (!$ccType.hasClass('error')) {
                    $ccType.addClass('error')
                        .parents('label').addClass('error')
                        .after('<small class="error">Invalid entry</small>');
                }

                valid = false;

            } else {
                if ($ccType.hasClass('error')) {
                    $ccType.removeClass('error')
                        .parents('label').removeClass('error')
                        .next().remove();
                }
            }

            if ($ccNumber.val() === '') {
                if (!$ccNumber.hasClass('error')) {
                    $ccNumber.addClass('error')
                        .parents('label').addClass('error')
                        .after('<small class="error">Invalid entry</small>');
                }

                valid = false;

            } else {
                if ($ccNumber.hasClass('error')) {
                    $ccNumber.removeClass('error')
                        .parents('label').removeClass('error')
                        .next().remove();
                }
            }

            if ($ccExpDate.val() === '') {
                if (!$ccExpDate.hasClass('error')) {
                    $ccExpDate.addClass('error')
                        .parents('label').addClass('error')
                        .after('<small class="error">Invalid entry</small>');
                }

                valid = false;

            } else {
                if ($ccExpDate.hasClass('error')) {
                    $ccExpDate.removeClass('error')
                        .parents('label').removeClass('error')
                        .next().remove();
                }
            }

            if ($ccSecurityCode.val() === '') {
                if (!$ccSecurityCode.hasClass('error')) {
                    $ccSecurityCode.addClass('error')
                        .parents('label').addClass('error')
                        .after('<small class="error">Invalid entry</small>');
                }

                valid = false;

            } else {
                if ($ccSecurityCode.hasClass('error')) {
                    $ccSecurityCode.removeClass('error')
                        .parents('label').removeClass('error')
                        .next().remove();
                }
            }

            return valid;
        }

    });

})();
