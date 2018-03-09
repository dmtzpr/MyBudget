import Expense from '../models/expense';

export default {
    async createExpense(data) {
        try {
            return Expense.create(data);
        } catch (e) {
            throw new AppError({ status: 400, ...e });
        }
    },
};
