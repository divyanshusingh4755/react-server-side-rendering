import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
    
    /*
    We only use Link tag if we want to navigate around our react app.
    Since we are redirecting it to our proxy sever(index.js). We are user a href
    Our render server is taking this request and browser doesn't know what
    is happening.
    */
    
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    );

    return (
        <nav className="nav-wrapper">
        <div>
            <Link to="/" className="brand-logo">React SSR</Link>
            <ul className="right">
                <li>
                <Link to="/users">Users</Link>
                </li>
                <li>
                <Link to="/admins">Admins</Link>
                </li>
                <li>
                {authButton}
                </li>
            </ul>
            </div>
            </nav>
    )
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);