import { Project, projects, Task } from '../fakeData/project.fakeData';

async function findProjectByIdProject(idProject: string) {
  const projectDetail = projects.find((project) => project.id === idProject);
  // const projectDetail =await projects.findById(idProject);

  if (!projectDetail) throw new Error('Not found a Project');

  return projectDetail;
}

async function findTasksByIdProject(idProject: string) {
  const projectDetail: Project = await findProjectByIdProject(idProject);

  if (!projectDetail.tasks || projectDetail.tasks.length === 0) throw new Error('Not have Task yet');

  const { tasks, name } = projectDetail;

  return { name, tasks };
}

async function findTaskByIdProjectAndIdTask(idProject: string, idTasks: string) {
  const tasksDetails: any = await findTasksByIdProject(idProject);

  const { name, tasks } = tasksDetails;
  const taskDetail = tasks.find((task: Task) => task.id === idTasks);
  // const taskDetail =await tasks.findById(idTasks);

  if (!taskDetail) throw new Error('Not found a Tasks');

  return { name, taskDetail };
}

export { findProjectByIdProject, findTasksByIdProject, findTaskByIdProjectAndIdTask };
