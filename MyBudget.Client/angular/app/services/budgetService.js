'use strict';

app.factory('budgetService', function () {
    var monthBudget = 1500; //mock data

    return {
        getMonthBudget: function () {
            //$http.get('mock-users-data/budget.js')
            return monthBudget;
        },

        setNewMonthBudget: function (budget) {
            monthBudget = budget;
        }
    };
});