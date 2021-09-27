/*
This component is just like nextJs _app.js component. This is used to pass
the component to all other components. Like we can declare Header and Footer
Component here.
*/

import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./component/Header";
import { fetchCurrentUsers } from "./actions";

const App = ({route}) => {
    return (
        <div>
            <Header/>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default {
    component: App,
    loadData: ({dispatch}) => dispatch(fetchCurrentUsers())
}