/* global angular */
var wizardControllers = angular.module('wizardControllers', []);

wizardControllers.controller('TransactionCtrl', ['$scope', '$location', '$routeParams', 'Transaction', 'Item', 'State',
    function ($scope, $location, $routeParams, Transaction, Item, State) {
        if (State.get() !== 'success') {
            Transaction.query(function (transactions) {
                var transactionId = $routeParams.transactionId - 1;
                var transaction = transactions[transactionId];

                $scope.transaction = transaction;

                $scope.nextStep = function () {
                    State.set('verify');
                    $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + transaction.customer);
                };
            });

            $scope.items = Item.query({ transaction: $routeParams.transactionId });
        } else {
            $location.path('/transaction/' + $routeParams.transactionId + '/success/');
        }
    }]);

wizardControllers.controller('CustomerCtrl', ['$scope', '$location', '$routeParams', 'Customer', 'State',
    function ($scope, $location, $routeParams, Customer, State) {

        if (State.get() !== 'success') {
            Customer.query(function (customers) {
                var customerId = $routeParams.customerId - 1;
                $scope.customer = customers[customerId];
            });

            $scope.params = $routeParams;

            $scope.states = ["TN", "VT"];

            $scope.nextStep = function () {
                if ($scope.customerContact.$valid) {
                    State.set('payment');
                    $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + $routeParams.customerId + '/payment');
                }
            };

            $scope.previousStep = function () {
                State.set('index');
                $location.path('/transaction/' + $routeParams.transactionId);
            };
        } else {
            $location.path('/transaction/' + $routeParams.transactionId + '/success/');
        }
    }]);

wizardControllers.controller('CustomerPaymentCtrl', ['$scope', '$location', '$routeParams', 'Customer', 'State',
    function ($scope, $location, $routeParams, Customer, State) {

        if (State.get() !== 'success') {

            Customer.query(function (customers) {
                var customerId = $routeParams.customerId - 1;
                $scope.customer = customers[customerId];
            });

            $scope.params = $routeParams;

            $scope.ccProviders = [{ name: "Visa", value: "VISA" }];

            $scope.ccType = $scope.ccProviders[0];

            $scope.nextStep = function () {
                if ($scope.customerPayment.$valid) {
                    State.set('success');
                    $location.path('/transaction/' + $routeParams.transactionId + '/success/');
                }
            };

            $scope.previousStep = function () {
                State.set('verify');
                $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + $routeParams.customerId);
            };
        } else {
            $location.path('/transaction/' + $routeParams.transactionId + '/success/');
        }
    }]);

wizardControllers.controller('TransactionSuccessCtrl', ['$scope', '$location', '$routeParams', 'Transaction', 'Item', 'Customer', 'State',
    function ($scope, $location, $routeParams, Transaction, Item, Customer, State) {
        Transaction.query(function (transactions) {
            var transactionId = $routeParams.transactionId - 1;
            var transaction = transactions[transactionId];
            var state = State.get();

            if (state === 'success') {
                $scope.items = Item.query({ transaction: $routeParams.transactionId });

                Customer.query(function (customers) {
                    var customerId = transaction.customer - 1;
                    $scope.customer = customers[customerId];
                });
            }

            if (state === 'index') {
                $location.path('/transaction/' + $routeParams.transactionId);
            }

            if (state === 'verify') {
                $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + transaction.customer);
            }

            if (state === 'payment') {
                $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + transaction.customer + '/payment');
            }
        });
    }]);
