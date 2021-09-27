/*
Below are the routes json for using it react router config. We are using
react router config to use route functionality. This is done because we
are using server side rendering and we want our routes to work for server
side too. 
 */

import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminListPage from "./pages/AdminListPage";

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...AdminListPage,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]