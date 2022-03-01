import React from 'react';
<<<<<<< HEAD
import ActiveMode from './Components/ActiveMode/ActiveMode';
import Dropdown from './Components/Dropdown/Dropdown';
=======
import DefaultMode from './Components/Dropdown/DefaultMode';
>>>>>>> tg2-35_navbar_basic-design
import './Navbar.css';
import '../../../Style/Colors.css'

function Navbar() {
    return (
        <div className='navbar'>
<<<<<<< HEAD
            <ActiveMode />
            <h2 className='about'>About</h2>
            <h2 className='logo'>LOGO</h2>
=======
            <div className='leftSide'>
                <DefaultMode />
                <h2 className='about'>About</h2>
            </div>
            <div className='rightSide'>
                <h2 className='logo'>LOGO</h2>
            </div>
>>>>>>> tg2-35_navbar_basic-design
        </div>
    );
};

export default Navbar;