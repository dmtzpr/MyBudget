var request = require('reqwest'),
    when = require('when');

var LoginConstants = require('../constants/login-constants');

var LoginActions = require('../actions/login-actions');

var AuthenticationService = {
    login: function (name, password) {
        debugger;
        return handleAuth(when(request({
            url: "http://localhost:8081/api/authenticate",//LoginConstants.MY_BUDGET_LOGIN_URL,
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            crossOrigin: true,
            type: 'json',
            data: {
                name,
                password
            }
        })));
    }
};

var handleAuth = function (loginPromise) {
    return loginPromise
        .then(function (response) {
            var jwt = response.token;
            LoginActions.login(jwt);
            return true;
        });
};

module.exports = AuthenticationService;