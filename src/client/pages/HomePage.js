/* 
 Home Page component
*/

import React from "react";

const Home = () => {
    return (
        <div className="center-align" style={{marginTop: "200px"}}>
            <h3>Welcome</h3>
            <p>Checkout these awesome features</p>
        </div>
    )
};


/*
below export is used because, since we are using react-router-config
react - router - config is pretty much differenct that react router.Due to
which this type of default is used
 */
export default {
    component: Home
};