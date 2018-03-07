import axios from 'axios';
import qs from 'qs';

import authHeader from '../helpers/auth-header';

export default {
    getExpenses: () =>
        axios({
            method: 'get',
            url: '/api/expense/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.expenses);
        }),

    getCategories: () =>
        axios({
            method: 'get',
            url: '/api/expense-category/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.categories);
        }),

    addExpense: expense =>
        axios({
            method: 'post',
            url: '/api/expense/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify(expense),
        }).then((response) => {
            if (response.status !== 201) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.expense);
        }),

    addCategory: name =>
        axios({
            method: 'post',
            url: '/api/expense-category/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({ name }),
        }).then((response) => {
            if (response.status !== 201) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.expenseCategory);
        }),
    deleteCategory: id =>
        axios({
            method: 'delete',
            url: id,
            baseURL: '/api/expense-category/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.id);
        }),
    addSubcategory: subcategory =>
        axios({
            method: 'post',
            url: subcategory.categoryId,
            baseURL: '/api/expense-category/subcategory/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({ name: subcategory.newSubcategoryName }),
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data);
        }),
    deleteSubcategory: category =>
        axios({
            method: 'PATCH',
            url: category.id,
            baseURL: '/api/expense-category/',

            headers: {
                ...authHeader(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify({ subcategoryId: category.subcategoryId }),
        }).then((response) => {
            if (response.status !== 200) {
                return Promise.reject(response.statusText);
            }

            return Promise.resolve(response.data.id);
        }),
};
