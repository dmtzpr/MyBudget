'use strict';

var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    LoginConstants = require('../constants/login-constants'),
    CHANGE_EVENT = require('../config').ChangeEventName;

var _loggedUsername = '';

function _login(username, password) {
    if (password === '123') {
        _loggedUsername = username;
        localStorage.setItem("mb_username", username);
    }
}

function _logout() {
    _loggedUsername = '';
    localStorage.setItem("mb_username", '');
}

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
            username: _loggedUsername,
            isLoggedIn: !!_loggedUsername
        }
    },

    isLoggedIn: function () {
        return !!localStorage.getItem("mb_username");
    },

    getLoggedUsername: function () {
        return localStorage.getItem("mb_username");
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case LoginConstants.MY_BUDGET_LOGIN:
            _login(action.username, action.password);
            LoginStore.emitChange();
            break;

        case LoginConstants.MY_BUDGET_LOGOUT:
            _logout();
            LoginStore.emitChange();
            break;
    }
});

module.exports = LoginStore;
