import './Board.css';
import { useState, useEffect } from 'react';
import myApi from '../../Url/Url';
import { I_Task } from './Types/I_Task';
import { List } from './Components/List.Components';
function Board() {
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
    getTasksByIdProject('blaBla');
  }, []);

  return (
    <div>
      <div className='tasks-container'>
        {labels.map((label: string, index: number) => {
          const relevantTasks = tasks.filter((task: I_Task) => task.status === index);
          return <List label={label} tasks={relevantTasks} key={label} />;
        })}
      </div>
    </div>
  );
}

export default Board;
