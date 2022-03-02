import '../../../Style/Colors.css';
import './Task.css';



function Task(props) {
    const { taskName, timesstamps, urgency } = props;

    return (
        <tr>
            <td>{taskName}</td>
            <td>{timesstamps}</td>
            <td>{urgency}</td>
        </tr>

    );
};

export default Task;