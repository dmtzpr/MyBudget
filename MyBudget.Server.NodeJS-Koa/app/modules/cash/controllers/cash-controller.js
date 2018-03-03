import pick from 'lodash/pick';
import Cash from '../models/cash';
import CashService from '../services/cash-service';

export default {
    async get(ctx) {
        const { user: { _id: userId } } = ctx;
        const cashes = await Cash.find({ userId });
        const balance = cashes.reduce((totalAmount, cash) => totalAmount + cash.amount, 0);

        ctx.body = { cash: { balance, cashes } };
    },

    async create(ctx) {
        const cashData = {
            ...pick(ctx.request.body, Cash.createFields),
            userId: ctx.user._id,
        };

        try {
            const { _id } = await CashService.createCash(cashData);
            const cash = await Cash.findOne({ _id });

            ctx.status = 200;
            ctx.body = { cash };
        } catch (e) {
            ctx.throw(400, e);
        }
    },
};
