import ExpenseCategory from '../models/expense-category';

export default {
    async createCategory(data) {
        const expenseCategory = await ExpenseCategory.findOne({ name: data.name, userId: data.userId });

        if (expenseCategory) {
            throw Error('Expense category with this name is exist');
        }

        return ExpenseCategory.create(data);
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
