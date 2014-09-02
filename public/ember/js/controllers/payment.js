/* global $, Ember, Wizard */

Wizard.CustomerPaymentController = Ember.ObjectController.extend({
    ccProviders: [{ name: "Visa", value: "VISA" }],

    actions: {
        nextStep: function () {
            if (this.validate()) {
                Wizard.State.set('state', 'success');
                this.transitionToRoute('transaction.success');
            }
        },

        previousStep: function (event) {
            Wizard.State.set('state', 'verify');
            this.transitionToRoute('customer.index');
        }
    },

    validate: function () {
        var valid = true,
            $form = $('#customer-payment'),
            ccName = this.get('ccName'),
            $ccName = $form.find('#cc-name'),
            ccType = this.get('ccType'),
            $ccType = $form.find('select[name="cc-type"]'),
            ccNumber = this.get('ccNumber'),
            $ccNumber = $form.find('#cc-number'),
            ccExpDate = this.get('ccExpDate'),
            $ccExpDate = $form.find('#cc-exp-date'),
            ccSecurityCode = this.get('ccSecurityCode'),
            $ccSecurityCode = $form.find('#cc-security-code');

        if (ccName === '') {
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

        if (!ccType) {
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

        if (ccNumber === '') {
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

        if (ccExpDate === '') {
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

        if (ccSecurityCode === '') {
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
