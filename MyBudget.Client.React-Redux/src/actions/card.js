import { push } from 'react-router-redux';

import ActionTypes from '../constants/card';
import cardService from '../services/card';

export const addCard = cardName => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_CARD_REQUEST, cardName });
    cardService.addCard(cardName).then(
        (card) => {
            dispatch({ type: ActionTypes.ADD_CARD_SUCCESS, card });
        },
        (error) => {
            dispatch({ type: ActionTypes.ADD_CARD_FAILURE, error });
        },
    );
};

export const rechargeCard = cardTransaction => (dispatch) => {
    dispatch({ type: ActionTypes.RECHARGE_CARD_SUCCESS, cardTransaction });
    dispatch(push('/'));
};

export const deleteCard = cardId => (dispatch) => {
    debugger;
    dispatch({ type: ActionTypes.DELETE_CARD_REQUEST, cardId });
    cardService.deleteCard(cardId).then(
        (id) => {
            dispatch({ type: ActionTypes.DELETE_CARD_SUCCESS, cardId: id });
        },
        (error) => {
            dispatch({ type: ActionTypes.DELETE_CARD_FAILURE, error });
        },
    );
};
