import { ListProps } from '../Types/ListProps';
import { Task } from './Task.Components';

export function List({ label, tasks }: ListProps) {
  return (
    <div className='column-tasks-container'>
      <h2 className='column-tasks-label'>{label}</h2>
      <div className='column-tasks-lists'>
        {tasks.map((task) => {
          return <Task key={task._id} {...task} />;
        })}
      </div>
    </div>
  );
}
