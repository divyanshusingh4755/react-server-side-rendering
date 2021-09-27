/* This is used to pass action that is coming via dispatch through react
redux. After this the type and payload will be passed to reducer i.e. userReducers.js */


export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get("/users");
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

export const FETCH_CURRENT_USER = "fetch_current_user"
export const fetchCurrentUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
}