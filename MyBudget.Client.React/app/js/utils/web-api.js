var request = require('reqwest'),
    {WEB_API_BASE_URL} = require('../config');

var user = localStorage.getItem('user'),
    jwt = null,
    userId = null;

if (user) {
    user = JSON.parse(user);
    jwt = user.token;
    userId = user.id;
}

var WebApi = {
    getMonthBudget: function () {
        return request({
            url: WEB_API_BASE_URL + 'budgets',
            method: 'GET',
            crossOrigin: true,
            data: {
                userId: userId,
                token: jwt
            }
        });
    },

    setMonthBudget: function (monthBudget) {
        return request({
            url: WEB_API_BASE_URL + 'budgets',
            method: 'POST',
            crossOrigin: true,
            data: {
                token: jwt,
                monthBudget,
                userId
            }
        });
    },

    getCashes: function () {
        return request({
            url: WEB_API_BASE_URL + 'cashes',
            method: 'GET',
            crossOrigin: true,
            data: {
                userId: userId,
                token: jwt
            }
        });
    },

    addCash: function (cashModel) {
        return request({
            url: WEB_API_BASE_URL + 'cashes',
            method: 'POST',
            crossOrigin: true,
            data: {
                token: jwt,
                userId: userId,
                amount: cashModel.amount,
                note: cashModel.note,
                date: cashModel.date
            }
        });
    },

    login: function (login, password) {
        return request({
            url: WEB_API_BASE_URL + 'authenticate',
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            crossOrigin: true,
            type: 'json',
            data: {
                login,
                password
            }
        }).then(function (data) {
            if (data.success) {
                jwt = data.user.token;
                userId = data.user.id;
            }

            return data;
        });
    },

    logout: function () {
        return request({
            url: WEB_API_BASE_URL + 'logout',
            method: 'GET',
            crossOrigin: true,
            type: 'json',
            data: {
                userId: userId,
                token: jwt
            }
        }).then(function (data) {
            if (data.success) {
                jwt = null;
                userId = null;
            }

            return data;
        });
    }
};

module.exports = WebApi;

