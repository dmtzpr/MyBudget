'use strict';

var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    jwt_decode = require('jwt-decode');

var AppDispatcher = require('../dispatcher/app-dispatcher'),
    LoginConstants = require('../constants/login-constants'),
    CHANGE_EVENT = require('../config').ChangeEventName;

var _user = null,
    _jwt = null;

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
        return _user._doc.name;
    },

    getJwt: function () {
        return _jwt
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case LoginConstants.MY_BUDGET_LOGIN:
            _jwt = action.jwt;
            _user = jwt_decode(_jwt);
            LoginStore.emitChange();
            break;

        case LoginConstants.MY_BUDGET_LOGOUT:
            _jwt = null;
            _user = null;
            LoginStore.emitChange();
            break;
    }
});

module.exports = LoginStore;