import React from 'react';
import DefaultMode__Open from './Components/DefaultMode/DefaultMode__Open';
import Dropdown from './Components/Dropdown/Dropdown';
import './Navbar.css';
import '../../../Style/Colors.css'

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar__activemode_leftSide'>
                    <DefaultMode__Open />
                    <h2 className='about'>About</h2>
                </div>
                <div className='navbar__activemode_rightSide'>
                    <h2 className='logo'>LOGO</h2>
                </div>

            </div>
            <Dropdown />
        </div>
    );
};

export default Navbar;