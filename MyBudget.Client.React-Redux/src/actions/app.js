import ActionTypes from '../constants/budget';
import CashActionTypes from '../constants/cash';
import CardActionTypes from '../constants/card';
import ExpenseCategoryTypes from '../constants/expense-category';
import { budgetService, cashService, cardService, expenseService } from '../services';

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

    expenseService.getCategories().then(
        (categories) => {
            dispatch({ type: ExpenseCategoryTypes.GET_EXPENSE_CATEGORY_SUCCESS, categories });
        },
        (error) => {
            dispatch({ type: ExpenseCategoryTypes.GET_EXPENSE_CATEGORY_FAILURE, error });
        },
    );
};
