var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    LoginConstants = require('../constants/login-constants'),
    CHANGE_EVENT = require('../config').CHANGE_EVENT_NAME;

var _user = null;

var LoginStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getState: function () {
        return {
            username: _user,
            isLoggedIn: !!_user
        }
    },

    isLoggedIn: function () {
        return !!_user;
    },

    getLoggedUsername: function () {
        return _user.name;
    },

    getJwt: function () {
        return _user.token;
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case LoginConstants.MY_BUDGET_LOGIN:
            _user = action.user;
            LoginStore.emitChange();
            break;
        case LoginConstants.MY_BUDGET_LOGOUT:
            _user = null;
            LoginStore.emitChange();
            break;
    }
});

module.exports = LoginStore;