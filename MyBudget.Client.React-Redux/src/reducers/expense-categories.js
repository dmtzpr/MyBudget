import ActionTypes from '../constants/expense-category';

export default function expenseCategories(state = [], action) {
    switch (action.type) {
        case ActionTypes.GET_EXPENSE_CATEGORY_SUCCESS:
            return action.categories;
        case ActionTypes.ADD_EXPENSE_CATEGORY_SUCCESS:
            debugger;
            return [...state, action.expenseCategory];
        case ActionTypes.ADD_EXPENSE_SUBCATEGORY_SUCCESS:
            debugger;
            return state.map(
                category =>
                    (category.id === action.subcategory.categoryId
                        ? {
                            ...category,
                            subcategories: [...category.subcategories, action.subcategory.subcategory],
                        }
                        : category),
            );
        case ActionTypes.DELETE_EXPENSE_CATEGORY_SUCCESS:
            return state.filter(category => category.id !== action.categoryId);
        case ActionTypes.DELETE_EXPENSE_SUBCATEGORY_SUCCESS:
            return state.map(
                category =>
                    (category.id === action.category.id
                        ? {
                            ...category,
                            subcategories: category.subcategories.filter(
                                subcategory => subcategory.id !== action.category.subcategoryId,
                            ),
                        }
                        : category),
            );
        default:
            return state;
    }
}
