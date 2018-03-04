import Card from '../models/card';

export default () => async (_id, ctx, next) => {
    const card = await Card.findOne({ _id });

    if (!card) {
        ctx.throw(404, `Card with id "${_id}" not found`);
    }

    ctx.card = card;

    await next();
};
