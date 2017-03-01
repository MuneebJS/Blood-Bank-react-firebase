import React from 'react';
import * as firebase from 'firebase';
// import store from '../store/store';
import { browserHistory } from 'react-router';
// import { mapStateToProps } from '../App.js';
// import { mapDispatchToProps } from '../App.js';
import signOut from './signout'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
        this.signIn = this.signIn.bind(this)
    }
    signIn(ev) {
        ev.preventDefault();
        let email = this.refs.sign_in_email.value;
        let pass = this.refs.sign_in_pass.value;
        console.log(email, pass)
       
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.then((user) => {
            // store.dispatch(this.props.authenticated)
            console.log(user)
            console.log(user.uid)
            var authenticated = true;
            this.setState({
                authenticated: authenticated
            })
            browserHistory.push('/home')

        })
        promise.catch(e => {
            console.log(e.message)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.signIn}>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" ref="sign_in_email" defaultValue="a@a.com"/> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" ref="sign_in_pass" defaultValue="123456"/> <br />
                    <input type="submit" value="Sign in" />
                </form>
                <signOut />
            </div>
        )
    }
}

export default SignIn