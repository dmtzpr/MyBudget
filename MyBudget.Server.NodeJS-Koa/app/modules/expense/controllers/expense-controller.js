import pick from 'lodash/pick';
import Expense from '../models/expense';
import ExpenseService from '../services/expense-service';

export default {
    async get(ctx) {
        const { user: { _id: userId } } = ctx;
        const expenses = await Expense.find({ userId }).select({ __v: 0 });

        ctx.body = { expenses };
    },

    async create(ctx) {
        const expenseData = {
            ...pick(ctx.request.body, Expense.createFields),
            userId: ctx.user._id,
        };

        try {
            const expense = await ExpenseService.createExpense(expenseData);

            ctx.status = 201;
            ctx.body = { expense };
        } catch (e) {
            ctx.throw(400, e);
        }
    },
};
