/**
 *  <Link to={'/addTaskBacklog/'} className="button">Add Task</Link><Link to={'/board/'} className="button">Move To Board</Link>
 */
// import './Backlog.css';
import Task from './components/Task/Task';
// import { Link } from 'react-router-dom';
import { projects } from './fakeData/project.fakeData';
import {IProject} from '../../interfaces';
const { name, tasks } = projects[0];
Backlog();

function Backlog() {
    // const props = projects[0];
    // const { name, tasks } = props;

    return (
        <div className='backlog'>
            <div className='backlog__header'>
                <button className='projectName'>{name}</button>
            </div>
            <div className='backlog__twoButtons'>
                <button className='projectName'>Add Task</button>
                <button className='projectName'>Move To Board</button>
            </div>
            <div className='backlog__table'>
                <table>
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Date</th>
                            <th>Task Urgency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Backlog;