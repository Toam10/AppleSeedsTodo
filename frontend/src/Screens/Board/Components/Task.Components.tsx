import { TaskProps } from '../Types/TaskProps';

export function Task(task: TaskProps) {
  return <div>{task.name}</div>;
}
