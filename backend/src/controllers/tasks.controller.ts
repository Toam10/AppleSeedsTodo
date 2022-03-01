import { Request, Response } from 'express';
import { Project, Task } from '../models/project';

async function fetchTaskDetails(req: Request, res: Response) {
  try {
    const taskDetail = await Task.find();
    if (!taskDetail) throw new Error('Not found a Task');
    res.status(200).send(taskDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}
async function fetchTaskDetailsByIdProject(req: Request, res: Response) {
  try {
    const taskDetails = await Task.find({ idProject: req.params.idProject });
    if (!taskDetails) throw new Error('Not found a Project');
    if (taskDetails.length) throw new Error('Not found a Task');

    res.status(200).send(taskDetails);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function fetchTaskDetailsByIdTask(req: Request, res: Response) {
  try {
    const taskDetail = await Task.findById(req.params.idTask);
    if (!taskDetail) throw new Error('Not found a Task');

    res.status(200).send(taskDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function createTask(req: Request, res: Response) {
  try {
    const projectDetail = await Project.findById(req.params.idProject);
    if (!projectDetail) throw new Error('Not found a Project');

    const { name, description, createdAt, urgency, status, comments } = req.body;

    const newTask = new Task({
      idProject: req.params.idProject,
      name,
      description,
      createdAt,
      urgency,
      status,
      comments,
    });

    const reciveNewTask = await newTask.save();

    res.status(200).send(reciveNewTask);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function updateTask(req: Request, res: Response) {
  try {
    const { name, description, createdAt, urgency, status, comments } = req.body;

    const taskDetail = await Task.findByIdAndUpdate(
      { _id: req.params.idTask },
      { name, description, createdAt, urgency, status, comments },
      {
        new: true,
      }
    );
    if (!taskDetail) throw new Error('Not found a task');

    res.status(200).send(taskDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

export { fetchTaskDetails, fetchTaskDetailsByIdTask, fetchTaskDetailsByIdProject, createTask, updateTask };
