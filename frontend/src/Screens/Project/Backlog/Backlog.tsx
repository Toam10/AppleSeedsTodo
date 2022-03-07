import React from 'react';
import './Backlog.css';
import '../../../Style/Colors.css'
import '../../../Style/FontSize.css'
import Task from './Task/Tasks';

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
            <div className='Tasks'>
                <div className='Task-Header__Container'>
                    <ul className='Task-Header'>
                        <li>Task Name</li>
                        <li>Task Date</li>
                        <li>Task Urgency</li>
                    </ul>
                </div>
                <div className='Task-List'>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>
    );
}

export default Backlog;
