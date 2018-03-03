import ActionTypes from '../constants/budget';
import CashActionTypes from '../constants/cash';
import CardActionTypes from '../constants/card';
import { budgetService, cashService, cardService } from '../services';

export const appLoad = () => (dispatch) => {
    budgetService.getBudget().then(
        (budget) => {
            dispatch({ type: ActionTypes.GET_MONTH_BUDGET_SUCCESS, monthBudget: budget });
        },
        (error) => {
            dispatch({ type: ActionTypes.GET_MONTH_BUDGET_FAILURE, error });
        },
    );

    cashService.getCash().then(
        (cash) => {
            dispatch({ type: CashActionTypes.GET_CASH_SUCCESS, cash });
        },
        (error) => {
            dispatch({ type: CashActionTypes.GET_CASH_FAILURE, error });
        },
    );

    cardService.getCards().then(
        (cards) => {
            dispatch({ type: CardActionTypes.GET_CARDS_SUCCESS, cards });
        },
        (error) => {
            dispatch({ type: CardActionTypes.GET_CARDS_FAILURE, error });
        },
    );
};
