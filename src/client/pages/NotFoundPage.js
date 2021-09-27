import React from "react";

/**
 We are using staticContext because. We are passing context from index.js
 and passing context object to res.send(renderer). To get context as prop 
 in notfoundpage we have pass is it as staticContext.

 We are passing empty object in staticContext becuase our client side doesn't
 know what staticContext means. To avoid this error on client side we are
 passing staticContext as empty object.
 */

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Oops, route not found</h1>
};

export default {
    component: NotFoundPage
}