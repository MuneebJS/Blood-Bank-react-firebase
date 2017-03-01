import React from 'react';
import { Link } from 'react-router';
const Nav = () => {
    // let menus = ["Home", 'Donation', 'Donors', 'Contact Us'];
    return (
        <div>
            {/*{menus.map((v, i) => {*/}
            {/*<li style={{display : 'inline', padding: '10px', margin: '10px'}}><Link key={i}>{v}</Link></li>*/}
            {/*})}*/}
            <ul>
                <Link to="/home"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Home</li></Link>
                <Link to="/donate"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Donate</li></Link>
                <Link to="/donors"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}> Donors</li></Link>
                <Link to="/contact_us"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Contact Us</li></Link>
            </ul>
        </div>
    )
}

/*const NavParent = () => {
    return (
        <ul>
            <Nav />
        </ul>
    )
}*/

export default Nav