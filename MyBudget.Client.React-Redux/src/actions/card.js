import { push } from 'react-router-redux';

import ActionTypes from '../constants/card';


export const addCard = cardName => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_CARD_SUCCESS, cardName });
};

export const rechargeCard = cardTransaction => (dispatch) => {
    dispatch({ type: ActionTypes.RECHARGE_CARD_SUCCESS, cardTransaction });
    dispatch(push('/'));
};

export const deleteCard = cardId => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_CARD_SUCCESS, cardId });
};
