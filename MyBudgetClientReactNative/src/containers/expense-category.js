import { connect } from 'react-redux';

import ExpenseCategory from '../components/expense-category/expense-category';
import {
    deleteExpenseCategory,
    addExpenseCategory,
    deleteExpenseSubcategory,
    addExpenseSubcategory,
} from '../actions/expense-category';

const mapStateToProps = state => ({
    categories: state.expenseCategories,
});

const mapDispatchToProps = dispatch => ({
    onDeleteExpenseCategory: categoryId => dispatch(deleteExpenseCategory(categoryId)),
    onAddExpenseCategory: categoryName => dispatch(addExpenseCategory(categoryName)),
    onDeleteExpenseSubcategory: category => dispatch(deleteExpenseSubcategory(category)),
    onAddExpenseSubcategory: newSubcategory => dispatch(addExpenseSubcategory(newSubcategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCategory);
