import axios from 'axios';
import qs from 'qs';

export default {
    getCards: () =>
        axios.get('cards').then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.cards);
        }),

    addCard: cardName =>
        axios.post('cards', qs.stringify({ name: cardName })).then((response) => {
            if (response.status !== 201) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.card);
        }),

    updateCard: cardTransaction =>
        axios.put(`cards/${cardTransaction.cardId}`, qs.stringify(cardTransaction)).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data);
        }),

    deleteCard: id =>
        axios.delete(`cards/${id}`).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.id);
        }),
};
