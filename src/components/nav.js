import React from 'react';
import { Link } from 'react-router';
import SignOut from './signout'

class Nav extends React.Component {
    render() {
        return (
            <div>
            <div className>
                <ul className='navbar navbar-default'>
                     <Link to="/sign_up"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Sign Up</li></Link>
                    <Link to="/sign_in"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Sign In</li></Link>
                    <Link to="/donate"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Donate</li></Link>
                    <Link to="/donors"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}> Donors</li></Link>
                    {/*<Link to="/donors"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Contact Us</li></Link>*/}
                    <li style={{ display: 'inline', float: 'right' }}><SignOut /></li>
                </ul>
               
                {this.props.children}
            </div >
            </div>
        )
    }
}
export default Nav