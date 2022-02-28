import React from 'react';
import Dropdown from '../GlobalComponents/Navbar/Components/Dropdown/Dropdown';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <Dropdown />
            <h2 className='about'>About</h2>
            <h2 className='logo'>LOGO</h2>
        </div>
    );
};

export default Navbar;