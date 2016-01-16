'use strict';

app.factory('loginService', function ($http) {

    var loggedUsername = '';

    return {
        login: function (username, password, callback) {
            return $http.get('mock-users-data/users.js').success(function (response) {
                if (response && response[username] && response[username].password === password) {
                    loggedUsername = username;
                    callback({ success: true });
                } else {
                    callback({ success: false, message: 'Username or password is incorrect' });
                }
            }).error(function () {
                callback({ success: false, message: 'Sign in service temporarily is unavailable' });
            });
        },

        getLoggedUsername: function () {
            return loggedUsername;
        },

        logout: function () {
            loggedUsername = '';
        },

        islogged: function () {
            return loggedUsername !== '';
        }
    };
});