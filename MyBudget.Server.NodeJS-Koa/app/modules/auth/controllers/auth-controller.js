import pick from 'lodash/pick';
import { User } from '../../users';
import jwtService from '../../../services/jwt-service';
import UserService from '../../users/services/user-service';

export default {
    async signUp(ctx) {
        const userData = pick(ctx.request.body, User.createFields);
        const { _id } = await UserService.createUser(userData);
        const user = await UserService.getUserWithPublicFields({ _id });

        ctx.status = 201;
        ctx.body = { data: user };
    },

    async signIn(ctx) {
        const { username, password } = ctx.request.body;

        if (!username || !password) {
            ctx.throw(400, {
                message: 'Invalid data',
            });
        }

        const user = await User.findOne({ username });

        if (!user) {
            ctx.throw(400, {
                message: 'User not found',
            });
        }

        if (!user.comparePasswords(password)) {
            ctx.throw(400, {
                message: 'Invalid data',
            });
        }

        const token = await jwtService.genToken({ username });

        ctx.body = { username, token };
    },
};
