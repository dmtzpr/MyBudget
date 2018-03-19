import { Actions } from 'react-native-router-flux';

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
    dispatch({ type: ActionTypes.RECHARGE_CARD_REQUEST, cardTransaction });

    cardService.updateCard(cardTransaction).then(
        (cardRecharge) => {
            dispatch({ type: ActionTypes.RECHARGE_CARD_SUCCESS, cardRecharge });
            Actions.home();
        },
        (error) => {
            dispatch({ type: ActionTypes.RECHARGE_CARD_FAILURE, error });
        },
    );
};

export const deleteCard = cardId => (dispatch) => {
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
