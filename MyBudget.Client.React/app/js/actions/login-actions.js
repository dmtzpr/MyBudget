'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    LoginConstants = require('../constants/login-constants');

var LoginActions = {
    login: function (jwt) {
        var savedJwt = localStorage.getItem('jwt');
        AppDispatcher.dispatch({
            actionType: LoginConstants.MY_BUDGET_LOGIN,
            jwt: jwt
        });

        if (savedJwt !== jwt) {
            localStorage.setItem('jwt', jwt);
        }
    },

    logout: function () {
        AppDispatcher.dispatch({
            actionType: LoginConstants.MY_BUDGET_LOGOUT
        });
    }
};

module.exports = LoginActions;