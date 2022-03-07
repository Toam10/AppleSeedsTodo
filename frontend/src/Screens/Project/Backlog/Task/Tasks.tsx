import React from 'react';
import './Tasks.css'
import '../../../../Style/Colors.css'
import '../../../../Style/FontSize.css'

function Task() {
    return (
        <div className='Task__Container'>
            <ul className='Task'>
                <li>Navbar</li>
                <li>24/02/22</li>
                <li className='Task__NotUrgent'></li>
            </ul>
        </div>
    );
}

export default Task;
