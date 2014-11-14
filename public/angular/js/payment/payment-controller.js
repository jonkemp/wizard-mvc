/* global angular */
(function () {
    'use strict';

    var CustomerPaymentCtrl = function ($scope, $location, $routeParams, Customer, State) {
        var _this = this;

        if (State.get() !== 'success') {

            Customer.query(function (customers) {
                var customerId = $routeParams.customerId - 1;
                _this.customer = customers[customerId];
            });

            _this.params = $routeParams;

            _this.ccProviders = [{ name: "Visa", value: "VISA" }];

            _this.ccType = _this.ccProviders[0];

            $scope.nextStep = function () {
                _this.customerPayment = $scope.customerPayment;
                _this.nextStep($location, $routeParams, State);
            };

            $scope.previousStep = function () {
                _this.previousStep($location, $routeParams, State);
            };
        } else {
            $location.path('/transaction/' + $routeParams.transactionId + '/success/');
        }
    };

    CustomerPaymentCtrl.prototype.nextStep = function ($location, $routeParams, State) {
        if (this.customerPayment.$valid) {
            State.set('success');
            $location.path('/transaction/' + $routeParams.transactionId + '/success/');
        }
    };

    CustomerPaymentCtrl.prototype.previousStep = function ($location, $routeParams, State) {
        State.set('verify');
        $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + $routeParams.customerId);
    };

    CustomerPaymentCtrl.$inject = ['$scope', '$location', '$routeParams', 'Customer', 'State'];

    angular
        .module('wizardControllers')
        .controller('CustomerPaymentCtrl', CustomerPaymentCtrl);
})();
