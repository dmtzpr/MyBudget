import {
    BudgetActionTypes,
    CardActionTypes,
    CashActionTypes,
    ExpenseCategoryActionTypes,
    ExpenseActionTypes,
} from '../constants';
import { budgetService, cashService, cardService, expenseService } from '../services';

export const appLoad = () => (dispatch) => {
    budgetService.getBudget().then(
        (budget) => {
            dispatch({ type: BudgetActionTypes.GET_MONTH_BUDGET_SUCCESS, monthBudget: budget });
        },
        (error) => {
            dispatch({ type: BudgetActionTypes.GET_MONTH_BUDGET_FAILURE, error });
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
            dispatch({ type: ExpenseCategoryActionTypes.GET_EXPENSE_CATEGORIES_SUCCESS, categories });
        },
        (error) => {
            dispatch({ type: ExpenseCategoryActionTypes.GET_EXPENSE_CATEGORIES_FAILURE, error });
        },
    );

    expenseService.getExpenses().then(
        (expenses) => {
            dispatch({ type: ExpenseActionTypes.GET_EXPENSE_SUCCESS, expenses });
        },
        (error) => {
            dispatch({ type: ExpenseActionTypes.GET_EXPENSE_FAILURE, error });
        },
    );
};
