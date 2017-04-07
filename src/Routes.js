import React, { Component } from 'react';
import { Router, IndexRoute, Route, Link, hashHistory, browserHistory, IndexLink } from 'react-router';
import PageNotFound from './components/pageNotFound';
import Home from './components/Home';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Buttons from './components/button'
import Nav from './components/nav'
import DonateForm from './components/donate'
import GetValue from './components/getValue'
// import MyAwesomeReactComponent from './components/signin'
// import signOut from './signout'


class Routes extends React.Component {
    // constructor (props) {
    // super(props)
    // }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Nav} >
                    <IndexRoute component={SignUp} />
                    <Route path="/sign_up" component={SignUp} />
                    <Route path="/sign_in" component={SignIn} />
                    <Route path="/donors" component={GetValue} />
                    <Route path="/donate" component={DonateForm} />
                    {/*<Route path='/home' component={Home} />*/}
                    <Route path='*' component={PageNotFound} />
                </Route>
            </Router >
        )
    }
}

export default Routes