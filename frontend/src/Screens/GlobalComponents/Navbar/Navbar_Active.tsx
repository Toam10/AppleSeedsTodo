import React from 'react';
import './Navbar.css';
import '../../../Style/Colors.css'
import ActiveMode from './Components/ActiveMode/ActiveMode';

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__activemode_leftSide'>
                    <ActiveMode />
                    <h2 className='about'>About</h2>
                </div>
                <div className='navbar__activemode_rightSide'>
                    <h2 className='logo'>LOGO</h2>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;