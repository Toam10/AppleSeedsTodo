import React from 'react';
import DefaultMode from './Components/Dropdown/DefaultMode';
import './Navbar.css';
import '../../../Style/Colors.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <DefaultMode />
                <h2 className='about'>About</h2>
            </div>
            <div className='rightSide'>
                <h2 className='logo'>LOGO</h2>
            </div>
        </div>
    );
};

export default Navbar;