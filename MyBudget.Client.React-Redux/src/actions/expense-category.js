import ActionTypes from '../constants/expense-category';

export const deleteExpenseCategory = categoryId => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_EXPENSE_CATEGORY_SUCCESS, categoryId });
};

export const addExpenseCategory = categoryName => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_EXPENSE_CATEGORY_SUCCESS, categoryName });
};

export const deleteExpenseSubcategory = category => (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_EXPENSE_SUBCATEGORY_SUCCESS, category });
};

export const addExpenseSubcategory = newSubcategory => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_EXPENSE_SUBCATEGORY_SUCCESS, newSubcategory });
};
