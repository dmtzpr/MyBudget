import jwtService from '../services/jwt-service';
import { User } from '../modules/users';

export default () => async (ctx, next) => {
    const { authorization } = ctx.headers;

    if (authorization) {
        try {
            const { username } = await jwtService.verify(authorization);

            ctx.user = await User.findOne({ username });
        } catch (e) {
            ctx.throw(401, { message: 'Unauthorized. Invalid token' });
        }
    }

    await next();
};
