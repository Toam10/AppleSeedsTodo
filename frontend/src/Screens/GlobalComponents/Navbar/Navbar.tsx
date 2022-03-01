import React from 'react';
import ActiveMode from './Components/ActiveMode/ActiveMode';
import Dropdown from './Components/Dropdown/Dropdown';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <ActiveMode />
            <h2 className='about'>About</h2>
            <h2 className='logo'>LOGO</h2>
        </div>
    );
};

export default Navbar;