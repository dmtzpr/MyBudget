var keyMirror = require('keymirror');

var BASE_URL = 'http://localhost:8080/';

var LoginConstants = keyMirror({
    MY_BUDGET_LOGIN: null,
    MY_BUDGET_LOGOUT: null,
    MY_BUDGET_LOGIN_URL: BASE_URL + 'api/authenticate'
});

module.exports = LoginConstants;
