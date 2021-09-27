// Main root reducer page which is used to combine several reducers together.

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import adminReducer from "./adminReducer";

const rootReducers = combineReducers({
    users: usersReducer,
    auth: authReducer,
    admin: adminReducer

});
export default rootReducers;