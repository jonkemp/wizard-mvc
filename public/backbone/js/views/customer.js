/*global Wizard, TemplateManager, Backbone, _, $*/

Wizard.Views = Wizard.Views || {};

(function () {
    'use strict';

    Wizard.Views.CustomerView = Backbone.View.extend({

        template: 'js/templates/customer.html',

        className: 'row',

        events: {
            'click #next': 'nextStep',
            'click #back': 'previousStep'
        },

        bindings: {
            '#name': 'name',
            '#address': 'address',
            '#city': 'city',
            '#state': 'state',
            '#zipcode': 'zipcode',
            '#email': 'email',
            '#phone': 'phone'
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
            var view = this;

            Wizard.templateManager.template( view.template )
                .done(function (content) {
                    view.$el.html( content( view.model.toJSON() ) );
                    view.stickit();
                });

            return this;
        },

        nextStep: function (event) {
            event.preventDefault();

            if (this.validate()) {
                Wizard.state = 'payment';
                this.trigger('wizard:payment');
            }
        },

        previousStep: function (event) {
            event.preventDefault();

            Wizard.state = 'index';
            this.trigger('wizard:transaction');
        },

        validate: function() {
            var valid = true,
                $name = this.$('#name'),
                $address = this.$('#address'),
                $city = this.$('#city'),
                $state = this.$('#state'),
                $zipcode = this.$('#zipcode'),
                $email = this.$('#email'),
                $phone = this.$('#phone');

            if ($name.val() === '') {
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

            if ($address.val() === '') {
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

            if ($city.val() === '') {
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

            if ($state.val() === '') {
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

            if ($zipcode.val() === '') {
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

            if ($email.val() === '') {
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

            if ($phone.val() === '') {
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

})();
