import axios from 'axios';
import qs from 'qs';

import responseHandler from '../helpers/response-handler';

export default {
    getExpenses: () => axios.get('expense').then(responseHandler('expenses')),

    getCategories: () => axios.get('expense-category').then(responseHandler('categories')),

    addExpense: expense => axios.post('expense', qs.stringify(expense)).then(responseHandler('expense')),

    addCategory: name =>
        axios.post('expense-category', qs.stringify({ name })).then(responseHandler('expenseCategory')),

    deleteCategory: id => axios.delete(`expense-category/${id}`).then(responseHandler('id')),

    addSubcategory: subcategory =>
        axios
            .post(
                `expense-category/subcategory/${subcategory.categoryId}`,
                qs.stringify({ name: subcategory.newSubcategoryName }),
            )
            .then(responseHandler('data')),

    deleteSubcategory: category =>
        axios
            .patch(`expense-category/${category.id}`, qs.stringify({ subcategoryId: category.subcategoryId }))
            .then(responseHandler('id')),
};
