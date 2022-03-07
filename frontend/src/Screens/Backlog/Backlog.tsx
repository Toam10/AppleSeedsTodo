/**
 *  <Link to={'/addTaskBacklog/'} className="button">Add Task</Link><Link to={'/board/'} className="button">Move To Board</Link>
 */
import './Backlog.css';
import '../../Style/Colors.css'
// import Task from './components/Task/Task';
// import { ITask } from '../../interfaces';
// import { Link } from 'react-router-dom';
// import {IProject} from '../../interfaces';
function Backlog() {
    return (
        <div className='backlog'>
            <div className='backlog__header'>
                <label className='backlog__label'>Project Name</label>
            </div>
            <div className='backlog__twoButtons'>
                <button className='backlog__btn1'>Add Task</button>
                <button className='backlog__btn2'>Move To Board</button>
            </div>
            <div className='backlog__table'>
                <table>
                    <thead>
                        <tr className='backlog__table_header'>
                            <th className='taskName'>Task Name</th>
                            <label className='line1'>|</label>
                            <th className='taskDate'>Task Date</th>
                            <label className='line2'>|</label>
                            <th className='taskUrgency'>Task Urgency</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className='task'>
                            <td className='task1_1'>to do</td>
                            <td className='task1_2'>20/20/22</td>
                            <td className='task1_3'>2</td>
                        </tr>
                        <tr className='task'>
                            <td className='task1_1'>to do2</td>
                            <td className='task1_2'>20/20/222</td>
                            <td className='task1_3'>22</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Backlog;

/**
 * 
 *  {
                            currentProject.map(task => (
                                <tr key={task.id}>
                                    <Task task={task} />
                                </tr>
                            ))
                        }
 */