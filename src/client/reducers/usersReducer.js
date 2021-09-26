/*
User reducer used to pass actions that is coming from action folder using
dispatch method. It always have default state to avoid erros.
*/

import { FETCH_USERS } from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}