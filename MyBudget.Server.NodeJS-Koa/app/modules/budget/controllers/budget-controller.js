import pick from 'lodash/pick';
import Budget from '../models/budget';
import BudgetService from '../services/budget-service';

export default {
    async create(ctx) {
        const budgetData = {
            ...pick(ctx.request.body, Budget.createFields),
            userId: ctx.user._id,
        };

        try {
            const { _id } = await BudgetService.createBudget(budgetData);
            const monthBudget = await Budget.findOne({ _id });

            ctx.status = 201;
            ctx.body = { data: monthBudget };
        } catch (e) {
            ctx.throw(400, e);
        }
    },

    async update(ctx) {
        const { params: { id: _id }, request: { body }, user: { _id: userId } } = ctx;

        const budget = await Budget.findOne({ _id });

        if (!budget) {
            ctx.throw(404, `Budget with id "${_id}" not found`);
        }

        if (budget.userId !== userId.toHexString()) {
            ctx.throw(403, `Forbidden. Budget with id "${_id}" dont belong to user with id ${userId}`);
        }

        const newData = pick(body, Budget.createFields);
        const updatedBudget = await BudgetService.updateBudget(newData, budget);

        ctx.body = { data: updatedBudget };
    },
};
