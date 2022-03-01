import React from 'react';
import ActiveMode from './Components/ActiveMode/ActiveMode';
import './Navbar.css';
import '../../../Style/Colors.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__activemode_leftSide'>
                <ActiveMode />
                <h2 className='about'>About</h2>
            </div>
            <div className='rightSide'>
                <h2 className='logo'>LOGO</h2>
            </div>
        </div>
    );
};

export default Navbar;