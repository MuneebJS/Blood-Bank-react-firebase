import React from 'react'
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'
import Input from './input';
import Btn from './btn'
import Heading from './heading';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.signUp = this.signUp.bind(this)
    }

    signUp(ev) {
        ev.preventDefault();
        let email = this.refs.sign_up_email.state.value;
        let pass = this.refs.sign_up_pass.state.value;
        console.log(email, pass)
        
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.then((user) => {
            console.log(user);
            console.log(email, pass)
            browserHistory.push('/sign_in')

        })
        promise.catch(e => {
            console.log(e.message)
        })
    }

    render() {
        return (
            <div>
                <Heading>Sign Up</Heading>
                <form onSubmit={this.signUp}>
                    <Input type="text" placeholder="email" ref="sign_up_email">Emial</Input>
                    <Input type="text" placeholder="password" ref="sign_up_pass">Password</Input>
                    <Btn type="submit">Sign up</Btn>
                </form>
            </div>
        )
    }
}

export default SignUp