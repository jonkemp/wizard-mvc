/* global $, Ember, Wizard */

Wizard.CustomerIndexController = Ember.ObjectController.extend({
    stateList: ["TN", "VT"],

    actions: {
        nextStep: function () {
            if (this.validate()) {
                Wizard.State.set('state', 'payment');
                this.transitionToRoute('customer.payment');
            }
        },

        previousStep: function (event) {
            Wizard.State.set('state', 'index');
            this.transitionToRoute('transaction.index');
        }
    },

    validate: function () {
        var valid = true,
            $form = $('#customer-contact'),
            name = this.get('name'),
            $name = $form.find('#name'),
            address = this.get('address'),
            $address = $form.find('#address'),
            city = this.get('city'),
            $city = $form.find('#city'),
            state = this.get('state'),
            $state = $form.find('select[name="state"]'),
            zipcode = this.get('zipcode'),
            $zipcode = $form.find('#zipcode'),
            email = this.get('email'),
            $email = $form.find('#email'),
            phone = this.get('phone'),
            $phone = $form.find('#phone');

        if (name === '') {
            if (!$name.hasClass('error')) {
                $name.addClass('error')
                    .parents('label').addClass('error')
                    .after('<small class="error">Invalid entry</small>');
            }

            valid = false;

        } else {
            if ($name.hasClass('error')) {
                $name.removeClass('error')
                    .parents('label').removeClass('error')
                    .next().remove();
            }
        }

        if (address === '') {
            if (!$address.hasClass('error')) {
                $address.addClass('error')
                    .parents('label').addClass('error')
                    .after('<small class="error">Invalid entry</small>');
            }

            valid = false;

        } else {
            if ($address.hasClass('error')) {
                $address.removeClass('error')
                    .parents('label').removeClass('error')
                    .next().remove();
            }
        }

        if (city === '') {
            if (!$city.hasClass('error')) {
                $city.addClass('error')
                    .parents('label').addClass('error')
                    .after('<small class="error">Invalid entry</small>');
            }

            valid = false;

        } else {
            if ($city.hasClass('error')) {
                $city.removeClass('error')
                    .parents('label').removeClass('error')
                    .next().remove();
            }
        }

        if (!state) {
            if (!$state.hasClass('error')) {
                $state.addClass('error')
                    .parents('label').addClass('error')
                    .after('<small class="error">Invalid entry</small>');
            }

            valid = false;

        } else {
            if ($state.hasClass('error')) {
                $state.removeClass('error')
                    .parents('label').removeClass('error')
                    .next().remove();
            }
        }

        if (zipcode === '') {
            if (!$zipcode.hasClass('error')) {
                $zipcode.addClass('error')
                    .parents('label').addClass('error')
                    .after('<small class="error">Invalid entry</small>');
            }

            valid = false;

        } else {
            if ($zipcode.hasClass('error')) {
                $zipcode.removeClass('error')
                    .parents('label').removeClass('error')
                    .next().remove();
            }
        }

        if (email === '') {
            if (!$email.hasClass('error')) {
                $email.addClass('error')
                    .parents('label').addClass('error')
                    .after('<small class="error">Invalid entry</small>');
            }

            valid = false;

        } else {
            if ($email.hasClass('error')) {
                $email.removeClass('error')
                    .parents('label').removeClass('error')
                    .next().remove();
            }
        }

        if (phone === '') {
            if (!$phone.hasClass('error')) {
                $phone.addClass('error')
                    .parents('label').addClass('error')
                    .after('<small class="error">Invalid entry</small>');
            }

            valid = false;

        } else {
            if ($phone.hasClass('error')) {
                $phone.removeClass('error')
                    .parents('label').removeClass('error')
                    .next().remove();
            }
        }

        return valid;
    }
});
