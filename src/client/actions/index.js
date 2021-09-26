/* This is used to pass action that is coming via dispatch through react
redux. After this the type and payload will be passed to reducer i.e. userReducers.js */

import axios from "axios";
import { isElement } from "lodash-es"

export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async dispatch => {
    const res = await axios.get("http://react-ssr-api.herokuapp.com/users");
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}