import '../../../Style/Colors.css';
import './Task.css';
import {ITask} from '../../../../interfaces';


function Task(props: ITask) {
    const { taskName, timestamps, urgency } = props;

    return (
        <tr>
            <td>{taskName}</td>
            <td>{timestamps}</td>
            <td>{urgency}</td>
        </tr>

    );
};

export default Task;