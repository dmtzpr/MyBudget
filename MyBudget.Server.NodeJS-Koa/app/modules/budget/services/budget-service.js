import Budget from '../models/budget';

export default {
    async createBudget(data) {
        const { userId } = data;
        const budgetCountByUserId = await Budget.count({ userId });

        if (budgetCountByUserId > 1) {
            throw new AppError({ status: 400, message: 'User can have no more than one budget' });
        }

        try {
            return Budget.create(data);
        } catch (e) {
            throw new AppError({ status: 400, ...e });
        }
    },

    async updateBudget(monthBudget, budget) {
        budget.set(monthBudget);

        return await budget.save();
    },
};
