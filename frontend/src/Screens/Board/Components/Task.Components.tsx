import { TaskProps } from '../Types/TaskProps';

export function Task(task: TaskProps) {
  return <div className='row-task'>{task.name}</div>;
}
