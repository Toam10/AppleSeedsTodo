// import '../../../Style/Colors.css';
// import './Task.css';
import {ITask} from '../../../../interfaces';


function Task(props: ITask) {
    console.log(props);
    console.log(props.taskName);
    return (
        <tr>
            <td>{props.taskName}</td>
            <td>{props.timestamps}</td>
            <td>{props.urgency}</td>
        </tr>

    );
};

export default Task;