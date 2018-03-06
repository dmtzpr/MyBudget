import axios from 'axios';
import qs from 'qs';

import authHeader from '../helpers/auth-header';

export default {
    getCards: () =>
        axios({
            method: 'get',
            url: '/api/cards/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.cards);
        }),

    addCard: cardName =>
        axios({
            method: 'post',
            url: '/api/cards/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({ name: cardName }),
        }).then((response) => {
            if (response.status !== 201) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.card);
        }),

    updateCard: cardTransaction =>
        axios({
            method: 'put',
            url: cardTransaction.cardId,
            baseURL: '/api/cards/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify(cardTransaction),
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data);
        }),

    deleteCard: id =>
        axios({
            method: 'delete',
            url: id,
            baseURL: '/api/cards/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.id);
        }),
};
