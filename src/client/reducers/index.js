// Main root reducer page which is used to combine several reducers together.

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";

const rootReducers = combineReducers({
    users: usersReducer,
    auth: authReducer
});
export default rootReducers;