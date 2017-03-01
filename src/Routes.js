import React, { Component } from 'react';
import { Router, Route, Link, hashHistory, browserHistory, IndexLink } from 'react-router';
import PageNotFound from './components/pageNotFound';
import Home from './components/Home';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Buttons from './components/button'
// import signOut from './signout'


class Routes extends React.Component {
    render() {
        return (
                <Router history={browserHistory}>
                    <Route path="/" component={Buttons} />
                    <Route path="/sign_in" component={SignIn} />
                    <Route path="/sign_up" component={SignUp} />
                    <Route path='/home' component={Home} />
                    <Route path='*' component={PageNotFound} />
                </Router>
        )
    }
}

export default Routes