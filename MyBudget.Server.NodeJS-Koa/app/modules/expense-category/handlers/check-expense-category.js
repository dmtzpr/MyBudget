import ExpenseCategory from '../models/expense-category';

export default () => async (_id, ctx, next) => {
    const expenseCategory = await ExpenseCategory.findOne({ _id });

    if (!expenseCategory) {
        ctx.throw(404, `Expense category with id "${_id}" not found`);
    }

    ctx.expenseCategory = expenseCategory;

    await next();
};
