
var app = angular.module('myBudgetApp', ['ngRoute', 'chart.js', 'ui.bootstrap']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'app/views/login.html', controller: 'loginController' });
    $routeProvider.when('/home', { templateUrl: 'app/views/home.html', controller: 'homeController' });
    $routeProvider.when('/settings', { templateUrl: 'app/views/settings.html', controller: 'homeController' });
    $routeProvider.when('/addcash', { templateUrl: 'app/views/cash.html', controller: 'cashController' });
    $routeProvider.when('/debitcards', { templateUrl: 'app/views/debitcards.html', controller: 'debitCardsController' });
    $routeProvider.when('/expense', { templateUrl: 'app/views/expense.html', controller: 'expenseController' });
    $routeProvider.when('/budget', { templateUrl: 'app/views/budget.html', controller: 'budgetController' });
    $routeProvider.when('/piechart', { templateUrl: 'app/views/piechart.html', controller: 'pieChartController' });
    $routeProvider.when('/barchart', { templateUrl: 'app/views/barchart.html', controller: 'barChartController' });

    $routeProvider.otherwise({ redirectTo: '/login' });
}]);
