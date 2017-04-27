var AppDispatcher = require('../dispatcher/app-dispatcher'),
    LoginConstants = require('../constants/login-constants'),
    WebApi = require('../utils/web-api');

var LoginActions = {
    login: function (login, password) {
        WebApi.login(login, password).then(function (data) {
            AppDispatcher.dispatch({
                actionType: LoginConstants.MY_BUDGET_LOGIN,
                user: data.user
            });
        });
    },

    logout: function () {
        WebApi.logout().then(function (data) {
            AppDispatcher.dispatch({
                actionType: LoginConstants.MY_BUDGET_LOGOUT
            });
        });
    }
};

module.exports = LoginActions;