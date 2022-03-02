import '../../../Style/Colors.css';
import './Backlog.css';
import Task from './components/Task/Task';
import { Link } from 'react-router-dom';
import { projects } from '../../../../backend/src/fakeData/project.fakeData';
import {IProject} from '../../interfaces';
const props = projects[0];
Backlog(props);

function Backlog({ name, tasks }: IProject) {
    // const { name, tasks } = props;

    return (
        <div className='backlog'>
            <div className='backlog__header'>
                <button className='projectName'>{name}</button>
            </div>
            <div className='backlog__twoButtons'>
                <Link to={'/addTaskBacklog/'} className="button">Add Task</Link>
                <Link to={'/board/'} className="button">Move To Board</Link>
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
                        {tasks && tasks.map(task => (
                            <Task
                                taskName={task.taskName}
                                timestamps={task.timestamps}
                                urgency={task.urgency}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Backlog;