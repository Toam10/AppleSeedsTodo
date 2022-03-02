import React from 'react';
import Dropdown from './Components/Dropdown/Dropdown';
import './Navbar.css';
import '../../../Style/Colors.css'

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar__activemode_leftSide'>
                    <Dropdown />
                    <h2 className='about'>About</h2>
                </div>
                <div className='navbar__activemode_rightSide'>
                    <h2 className='logo'>LOGO</h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;