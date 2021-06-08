import React from 'react';
import {NavLink} from 'react-router-dom';
import "./NavBar.css";

const Navbar = () => {  
    return (
        <nav className="NavBar">
            <NavLink exact to='/soda'>
                Soda
            </NavLink>
            <NavLink exact to='/chips'>
                Chips
            </NavLink>
            <NavLink exact to='/fresh-sardines'>
                Fresh Sardines
            </NavLink>
        </nav>
    )
}

export default Navbar;