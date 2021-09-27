/*
1. This component is used to show the user list. We have used react redux for
state management. We have used HOC: connect() for passing data

2. We have also used loaddata function. It's because this is used to use
react redux via server side. In this we are directly using store.dispatch.
Due to this we have omitted sending the data to action folder.
This is used to load data for server side rendering using redux

3. we have used window.INITIAL_STATE becuase we are first loading data with
the help of server. If data is already loaded using server side. Then 
this.props.fetchUsers() function we will not run. This will help us recalling
api again.
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersList extends Component{
    componentDidMount() {
        if (!window.INITIAL_STATE) {
            this.props.fetchUsers();
        }
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head() {
        return (
            <Helmet>
                {/* This is important beacause helmet expects it a single string
                To aviod this error we are using all in single curly braces
                */}
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

render(){
    return (
        <div>
            {this.head()}
            Here is a big list of user
            <ul>{this.renderUsers()}</ul>
        </div>
    )
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
}