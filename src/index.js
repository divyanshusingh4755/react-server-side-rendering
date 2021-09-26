/*
1. Main file for using this application as server side rendering. In this
we are using express.static("public") to send our javascript files through
our server. It's because if we want to add event handlers or functionality
in our react app, we have to use this function. From here our javascript files
will be called. These all commands are defined in webpack.js

2. we are using react-redux on server side. It's becuase we want to load
our intial data using redux.

3. we are using macthRoutes from react-router-config. It's because we get
routes in the form of array. To get each routes we are using map function.
In some routes we are passing loadData. If loadData is passed in that route
then in that function redux store will be sent.

4. Since map function returns promises. To solve that all promise we are passing
promise to promise.all(). Inside that we are call res.send(renderer()).
Component which we have to render on the server.
*/

import "babel-polyfill";
import renderer from "./helpers/renderer";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore";

const app = express();


/*
Set up proxy.It is used because any request level that will access
domain / api will automatically sent to main url.This it used because
we have sent our request from server to api, not from client to api.
*/

app.use("/api", proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = "localhost:3000";
        return opts;
    }
}));

app.use(express.static("public"));

app.get("*", (req, res) => {
    // Passing cookie to createStore.js with the help of req
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    })

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
})