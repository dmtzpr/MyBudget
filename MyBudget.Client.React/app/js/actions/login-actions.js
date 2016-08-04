'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    LoginConstants = require('../constants/login-constants');

var LoginActions = {
    login: function (username, password) {
        AppDispatcher.dispatch({
            actionType: LoginConstants.MY_BUDGET_LOGIN,
            username: username,
            password: password
        });
    },

    logout: function () {
        AppDispatcher.dispatch({
            actionType: LoginConstants.MY_BUDGET_LOGOUT
        });
    }
};

module.exports = LoginActions;