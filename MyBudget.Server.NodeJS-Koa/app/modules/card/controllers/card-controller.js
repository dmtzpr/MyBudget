import pick from 'lodash/pick';
import Card from '../models/card';
import CardService from '../services/card-service';

export default {
    async get(ctx) {
        const { user: { _id: userId } } = ctx;
        const cards = await Card.find({ userId }).select({ __v: 0 });

        ctx.body = { cards };
    },

    async create(ctx) {
        const cardData = {
            ...pick(ctx.request.body, Card.createFields),
            userId: ctx.user._id,
        };

        try {
            const { _id } = await CardService.createCard(cardData);
            const card = await Card.findOne({ _id });

            ctx.status = 201;
            ctx.body = { card };
        } catch (e) {
            ctx.throw(400, e);
        }
    },

    async delete(ctx) {},
};
