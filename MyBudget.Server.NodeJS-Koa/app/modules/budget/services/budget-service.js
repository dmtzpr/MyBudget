import { Budget } from '../models';

export default {
    async createBudget(data) {
        const { userId } = data;
        const budgetCountByUserId = await Budget.count({ userId });

        if (budgetCountByUserId > 1) {
            throw Error('User can have no more than one budget');
        }

        return Budget.create(data);
    },

    async updateBudget(monthBudget, budget) {
        budget.set(monthBudget);

        return await budget.save();
    },
};
