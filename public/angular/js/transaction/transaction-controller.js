/* global angular */
(function () {
    'use strict';

    var TransactionCtrl = function ($scope, $location, $routeParams, Transaction, Item, State) {
        var _this = this;

        if (State.get() !== 'success') {
            Transaction.query(function (transactions) {
                var transactionId = $routeParams.transactionId - 1;
                var transaction = transactions[transactionId];

                _this.transaction = transaction;

                $scope.nextStep = function () {
                    _this.nextStep($location, $routeParams, State);
                };
            });

            _this.items = Item.query({ transaction: $routeParams.transactionId });
        } else {
            $location.path('/transaction/' + $routeParams.transactionId + '/success/');
        }
    };

    TransactionCtrl.prototype.nextStep = function ($location, $routeParams, State) {
        State.set('verify');
        $location.path('/transaction/' + $routeParams.transactionId + '/customer/' + this.transaction.customer);
    };

    TransactionCtrl.$inject = ['$scope', '$location', '$routeParams', 'Transaction', 'Item', 'State'];

    angular
        .module('wizardControllers')
        .controller('TransactionCtrl', TransactionCtrl);
})();
