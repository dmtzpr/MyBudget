import pick from 'lodash/pick';
import Budget from '../models/budget';
import BudgetService from '../services/budget-service';

export default {
    async get(ctx) {
        const { user: { _id: userId } } = ctx;

        const budget = await Budget.findOne({ userId });

        if (!budget) {
            ctx.throw(404, `User budget with id "${userId}" not found`);
        }

        ctx.body = budget;
    },

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
        const { request: { body }, user: { _id: userId } } = ctx;

        const budget = await Budget.findOne({ userId });

        if (!budget) {
            ctx.throw(404, `User budget with id "${userId}" not found`);
        }

        const newData = pick(body, Budget.createFields);
        const updatedBudget = await BudgetService.updateBudget(newData, budget);

        ctx.body = updatedBudget;
    },
};
