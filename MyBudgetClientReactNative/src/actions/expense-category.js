import ActionTypes from '../constants/expense-category';

import expenseService from '../services/expense';

export const addExpenseCategory = categoryName => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_EXPENSE_CATEGORY_REQUEST, categoryName });

    expenseService.addCategory(categoryName).then(
        (expenseCategory) => {
            dispatch({ type: ActionTypes.ADD_EXPENSE_CATEGORY_SUCCESS, expenseCategory });
        },
        (error) => {
            dispatch({ type: ActionTypes.ADD_EXPENSE_CATEGORY_FAILURE, error });
        },
    );
};

export const deleteExpenseCategory = categoryId => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_EXPENSE_CATEGORY_REQUEST, categoryId });
    expenseService.deleteCategory(categoryId).then(
        (id) => {
            dispatch({ type: ActionTypes.DELETE_EXPENSE_CATEGORY_SUCCESS, categoryId: id });
        },
        (error) => {
            dispatch({ type: ActionTypes.DELETE_EXPENSE_CATEGORY_FAILURE, error });
        },
    );
};

export const addExpenseSubcategory = newSubcategory => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_EXPENSE_SUBCATEGORY_REQUEST, newSubcategory });
    expenseService.addSubcategory(newSubcategory).then(
        (subcategory) => {
            dispatch({ type: ActionTypes.ADD_EXPENSE_SUBCATEGORY_SUCCESS, subcategory });
        },
        (error) => {
            dispatch({ type: ActionTypes.ADD_EXPENSE_SUBCATEGORY_FAILURE, error });
        },
    );
};

export const deleteExpenseSubcategory = category => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_EXPENSE_SUBCATEGORY_REQUEST, category });
    expenseService.deleteSubcategory(category).then(
        (subcategory) => {
            dispatch({ type: ActionTypes.DELETE_EXPENSE_SUBCATEGORY_SUCCESS, subcategory });
        },
        (error) => {
            dispatch({ type: ActionTypes.DELETE_EXPENSE_SUBCATEGORY_SUCCESS, error });
        },
    );
};
