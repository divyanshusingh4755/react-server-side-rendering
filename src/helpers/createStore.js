/*
We are using react redux on server side too. This is because we want to
maintain data on server side too.
This file will be get called to index.js on server side. We are using thunk
for async operation.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../client/reducers";

export default () => {
    const store = createStore(rootReducers, {}, applyMiddleware(thunk));

    return store;
};