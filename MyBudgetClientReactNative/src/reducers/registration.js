import ActionTypes from '../constants/user';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return { registering: true };
        case ActionTypes.REGISTER_SUCCESS:
            return {};
        case ActionTypes.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
};
