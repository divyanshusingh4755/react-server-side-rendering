/*
1. Startup point for the client side application. Below we are using react-redux
and react router config. This is very much different that react router.

2. As it takes input in the form of array, in which routes is formed in the 
form of JSON.

3. We are are using window.INITIAL_STATE because we are first loading data
using server side and this data is passing to client side store. It's because
re-rendering or recalling of api is not there.
*/

import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Routes from "./Routes";
import axios from "axios";
import rootReducers from "./reducers";
import { renderRoutes } from "react-router-config";


// Creating custom axios with axios.create
const axiosInstance = axios.create({
    baseURL: "/api",

});

const store = createStore(
    rootReducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{ renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));