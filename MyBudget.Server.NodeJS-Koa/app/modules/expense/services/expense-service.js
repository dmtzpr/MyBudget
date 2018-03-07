import Expense from '../models/expense';

export default {
    async createExpense(data) {
        return Expense.create(data);
    },
};
