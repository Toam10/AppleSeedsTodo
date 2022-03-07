import './Board.css';
import { useState, useEffect } from 'react';
import myApi from '../../Url/Url';

interface I_Task {
  _id: string;
  idProject: string;
  name: string;
  description: string;
  createdAt: Date;
  urgency: number;
  status: number;
  comments: [
    {
      _id: string;
      comment: string;
    }
  ];
}

type ListProps = {
  label: string;
  tasks: I_Task[];
};

type TaskProps = I_Task;

function Task(task: TaskProps) {
  return <div>{task.name}</div>;
}

function List({ label, tasks }: ListProps) {
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

function PageBoard() {
  const [tasks, setTasks] = useState([] as I_Task[]);
  const [labels, setLabels] = useState([] as string[]);
  useEffect(() => {
    const getTasksByIdProject = async (idProject: string) => {
      try {
        //   const resultProject = await myApi.get(`/fetchProjectDetails/${idProject}`);
        //   const result = await myApi.get(`fetchTaskDetailsByIdProject/${idProject}`);
        const [
          {
            data: { labels },
          },
          { data: tasks },
        ] = await Promise.all([
          myApi.get(`/fetchProjectDetails/6225364d9e36e0ed03da6d57`),
          myApi.get(`fetchTaskDetailsByIdProject/6225364d9e36e0ed03da6d57`),
        ]);

        setLabels(labels);
        setTasks(tasks);
      } catch (e) {
        console.log(e);
      }
    };
    getTasksByIdProject('blabla');
  }, []);

  return (
    <div>
      <h2>Board</h2>
      {labels.map((label: string, index: number) => {
        const relevantTasks = tasks.filter((task: I_Task) => task.status === index);
        return <List label={label} tasks={relevantTasks} />;
      })}
    </div>
  );
}

export default PageBoard;
