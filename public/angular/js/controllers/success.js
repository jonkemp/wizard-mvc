/* global angular */
(function () {
    'use strict';

    var TransactionSuccessCtrl = function ($location, $routeParams, Transaction, Item, Customer, State) {
        var _this = this;

        Transaction.query(function (transactions) {
            var transactionId = $routeParams.transactionId - 1;
            var transaction = transactions[transactionId];
            var state = State.get();

            if (state === 'success') {
                _this.items = Item.query({ transaction: $routeParams.transactionId });

                Customer.query(function (customers) {
                    var customerId = transaction.customer - 1;
                    _this.customer = customers[customerId];
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
    };

    TransactionSuccessCtrl.$inject = ['$location', '$routeParams', 'Transaction', 'Item', 'Customer', 'State'];

    angular
        .module('wizardControllers')
        .controller('TransactionSuccessCtrl', TransactionSuccessCtrl);
})();
