/*
1. This is main file for rendering our data on server side. We are using
StaticRouter because in server side routing is possible using static router
only.
2. In this we are passing location for accessing the path of the compoent.
3. we are also using renderRoutes from react router config. This is much
different than react router. It's used because we want to use navigation
from server side.
4. we are also using serialize javascript because to prevent from XSS = Cross
Scripting attacks. It will sanitize our content.
5. we are using store.getState because we want to use react redux from server
side. We are getting initial data using getState and passing it to store.
 */

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serializeJavascript from "serialize-javascript";

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>
    );

    return `
    <html>
    <head></head>
    <body>
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE = ${serializeJavascript(store.getState())}
    </script>
    <script src="bundle.js"></script>
    </body>
    </html>
    `;
};