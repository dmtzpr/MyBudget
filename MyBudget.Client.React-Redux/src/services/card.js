import axios from 'axios';
import qs from 'qs';

import responseHandler from '../helpers/response-handler';

export default {
    getCards: () => axios.get('cards').then(responseHandler('cards')),

    addCard: cardName => axios.post('cards', qs.stringify({ name: cardName })).then(responseHandler('card')),

    updateCard: cardTransaction =>
        axios.put(`cards/${cardTransaction.cardId}`, qs.stringify(cardTransaction)).then(responseHandler()),

    deleteCard: id => axios.delete(`cards/${id}`).then(responseHandler('id')),
};
