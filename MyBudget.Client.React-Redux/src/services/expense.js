import axios from 'axios';
import qs from 'qs';

export default {
    getExpenses: () =>
        axios.get('expense').then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.expenses);
        }),

    getCategories: () =>
        axios.get('expense-category').then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.categories);
        }),

    addExpense: expense =>
        axios.post('expense', qs.stringify(expense)).then((response) => {
            if (response.status !== 201) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.expense);
        }),

    addCategory: name =>
        axios.post('expense-category', qs.stringify({ name })).then((response) => {
            if (response.status !== 201) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.expenseCategory);
        }),
    deleteCategory: id =>
        axios.delete(`expense-category/${id}`).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.id);
        }),
    addSubcategory: subcategory =>
        axios
            .post(
                `expense-category/subcategory/${subcategory.categoryId}`,
                qs.stringify({ name: subcategory.newSubcategoryName }),
            )
            .then((response) => {
                if (response.status !== 200) {
                    return Promise.reject(response.statusText);
                }

                return Promise.resolve(response.data);
            }),
    deleteSubcategory: category =>
        axios
            .patch(`expense-category/${category.id}`, qs.stringify({ subcategoryId: category.subcategoryId }))
            .then((response) => {
                if (response.status !== 200) {
                    return Promise.reject(response.statusText);
                }

                return Promise.resolve(response.data.id);
            }),
};
