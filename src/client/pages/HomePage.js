/* 
 Home Page component
*/

import React from "react";

const Home = () => {
    return (
        <div>
            <div>I am the home component</div>
            <button onClick={() => console.log("I am clicked")}>Click Me</button>
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