import ExpenseCategory from '../models/expense-category';

export default {
    async createCategory(data) {
        const expenseCategory = await ExpenseCategory.findOne({ name: data.name, userId: data.userId });
        if (expenseCategory) {
            throw new AppError({ status: 400, message: 'Expense category with this name is exist' });
        }

        try {
            return ExpenseCategory.create(data);
        } catch (e) {
            throw new AppError({ status: 400, ...e });
        }
    },

    async createSubcategory(subcategoryData, expenseCategory) {
        expenseCategory.subcategories.push(subcategoryData);

        return await expenseCategory.save();
    },

    async deleteSubcategory(subcategoryId, expenseCategory) {
        expenseCategory.subcategories.pull({ id: subcategoryId });

        return await expenseCategory.save();
    },
};
