/* global angular */
(function () {
    'use strict';

    var CustomerCtrl = function ($scope, $location, $routeParams, Customer, State) {
        var _this = this;

        if (State.get() !== 'success') {
            Customer.query(function (customers) {
                var customerId = $routeParams.customerId - 1;
                _this.customer = customers[customerId];
            });

            _this.params = $routeParams;

            _this.states = ["TN", "VT"];

            $scope.nextStep = function () {
                _this.customerContact = $scope.customerContact;
                _this.nextStep($location, $routeParams, State);
            };

            $scope.previousStep = function () {
                _this.previousStep($location, $routeParams, State);
            };
        } else {
            $location.path('/transaction/' + $routeParams.transactionId + '/success/');
        }
    };

    CustomerCtrl.prototype.nextStep = function ($location, $routeParams, State) {
        if (this.customerContact.$valid) {
            State.set('payment');
            $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + $routeParams.customerId + '/payment');
        }
    };

    CustomerCtrl.prototype.previousStep = function ($location, $routeParams, State) {
        State.set('index');
        $location.path('/transaction/' + $routeParams.transactionId);
    };

    CustomerCtrl.$inject = ['$scope', '$location', '$routeParams', 'Customer', 'State'];

    angular
        .module('wizardControllers')
        .controller('CustomerCtrl', CustomerCtrl);
})();
