import pick from 'lodash/pick';
import ExpenseCategory from '../models/expense-category';
import ExpenseCategoryService from '../services/expense-category-service';

export default {
    async get(ctx) {
        const { user: { _id: userId } } = ctx;
        const categories = await ExpenseCategory.find({ userId }).select({ __v: 0 });

        ctx.body = { categories };
    },

    async create(ctx) {
        const categoryData = {
            ...pick(ctx.request.body, ExpenseCategory.createFields),
            userId: ctx.user._id,
        };

        try {
            const expenseCategory = await ExpenseCategoryService.createCategory(categoryData);

            ctx.status = 201;
            ctx.body = { expenseCategory };
        } catch (e) {
            ctx.throw(400, e);
        }
    },

    async delete(ctx) {
        const { user: { _id: userId }, expenseCategory } = ctx;

        if (expenseCategory.userId !== userId.toHexString()) {
            ctx.throw(
                403,
                `Forbidden. ExpenseCategory with id "${expenseCategory._id}" dont belong to user with id ${userId}`
            );
        }

        await expenseCategory.remove();

        ctx.body = { id: expenseCategory._id };
    },

    async createSubcategory(ctx) {
        const { user: { _id: userId }, request: { body }, expenseCategory } = ctx;

        if (expenseCategory.userId !== userId.toHexString()) {
            ctx.throw(
                403,
                `Forbidden. ExpenseCategory with id "${expenseCategory._id}" dont belong to user with id ${userId}`
            );
        }

        const subcategoryData = pick(body, ExpenseCategory.createSubcategoryFields);
        const category = await ExpenseCategoryService.createSubcategory(subcategoryData, expenseCategory);
        const subcategory = category.subcategories[category.subcategories.length - 1];

        ctx.body = {
            subcategory: {
                name: subcategory.name,
                id: subcategory._id,
            },
            categoryId: expenseCategory._id,
        };
    },

    async deleteSubcategory(ctx) {
        const { user: { _id: userId }, request: { body }, expenseCategory } = ctx;

        if (card.userId !== userId.toHexString()) {
            ctx.throw(403, `Forbidden. Expense Category with id "${card._id}" dont belong to user with id ${userId}`);
        }

        const subcategoryId = body.subcategoryId;
        const category = await ExpenseCategoryService.deleteSubcategory(subcategoryId, card);

        ctx.body = {
            id: category._id,
            subcategoryId,
        };
    },
};
