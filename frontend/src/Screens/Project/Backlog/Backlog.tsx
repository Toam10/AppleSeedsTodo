import React from 'react';
import './Backlog.css';
import '../../../Style/Colors.css'
import '../../../Style/FontSize.css'

function Backlog() {
    return (
        <div className='Backlog__Container'>
            <div className='Backlog__Page-Title'>
                <h2>Project</h2>
            </div>
            <div className='Backlog__Buttons__Container'>
                <ul className='Backlog__Buttons'>
                    <li>Add Task</li>
                    <li>Move to Board</li>
                </ul>
            </div>
            <div className='Backlog__Tasks'>
                <div className='Backlog__Task-Header__Container'>
                    <ul className='Backlog__Task-Header'>
                        <li>Task Name</li>
                        <li>Task Date</li>
                        <li>Task Urgency</li>
                    </ul>
                </div>
                <div className='Backlog__Task-List'>
                    <ul className='Backlog__Task'>
                        <li>Navbar</li>
                        <li>24/02/22</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Backlog;
