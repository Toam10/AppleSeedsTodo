import { Request, Response } from 'express';
import { Project, projects, Task } from '../fakeData/project.fakeData';
import { findProjectByIdProject, findTasksByIdProject, findTaskByIdProjectAndIdTask } from '../services/tasks.services';
async function getAllTaskDetails(req: Request, res: Response) {
  try {
    const tasksFilter: Project[] = projects.map((project): Project => {
      const { tasks, name } = project;

      return { name, tasks } as Project;
    });
    res.status(200).send(tasksFilter);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function getTasksDetailsByIdProject(req: Request, res: Response) {
  try {
    const tasksDetails = await findTasksByIdProject(req.params.idProject);

    res.status(200).send(tasksDetails as any);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function getTaskDetailsByIdTask(req: Request, res: Response) {
  try {
    const taskDetail = await findTaskByIdProjectAndIdTask(req.params.idProject, req.params.idTask);

    res.status(200).send(taskDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function changeTasksProcedure(req: Request, res: Response) {
  try {
    const taskDetail: any = await findTaskByIdProjectAndIdTask(req.params.idProject, req.params.idTask);
    const { procedure } = req.body;
    // if (!procedure || procedure>WWWW.length||procedure<-1) throw new Error('Please enter only Number in The range');

    // taskDetail.procedure = procedure;
    // const reciveUpdateTask = await taskDetail.save();

    // res.status(200).send(reciveUpdateTask);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function createAndUpdateTask(req: Request, res: Response) {
  try {
    const projectDetail: Project = await findProjectByIdProject(req.params.idProject);
    const { taskName, timestamps, urgency, procedure, descriptionTask, comments } = req.body;
    // const updateTask = await projectDetail.findOneAndUpdate(
    //   { id: req.params.idProject },
    //   { $set: { taskName, timestamps, urgency, procedure, descriptionTask, comments } },
    //   { new: true, upsert: true, setDefaultsOnInsert: true }
    // );

    // res.status(200).send(updateTask);
  } catch (error) {
    res.status(400).send(error);
  }
}
export {
  getAllTaskDetails,
  getTaskDetailsByIdTask,
  getTasksDetailsByIdProject,
  createAndUpdateTask,
  changeTasksProcedure,
};
