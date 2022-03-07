import { Request, Response } from 'express';
import { Project } from '../models/project';
import { Task } from '../types/task';
async function fetchTaskDetailsByIdProject(req: Request, res: Response) {
  try {
    const { idProject } = req.params;

    const taskDetails = await Project.findById(idProject);

    if (!taskDetails) throw new Error('Not found a Project');
    if (taskDetails.tasks.length === 0) throw new Error('Not have a Task yet');

    res.status(200).send(taskDetails.tasks);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function fetchTaskDetailsByIdProjectAndIdTask(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const { idProject } = req.params;
    const projectDetail = await Project.findById(idProject, { tasks: { $elemMatch: { _id: idTask } } });
    if (!projectDetail) throw new Error('Not found a Project');
    if (!projectDetail.tasks.length) throw new Error('Not found a Task');

    res.status(200).send(projectDetail.tasks[0]);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function createTask(req: Request, res: Response) {
  try {
    const { idProject } = req.params;

    const projectDetail = await Project.findById(idProject);
    if (!projectDetail) throw new Error('Not found a Project');

    const newTaskToSet = req.body;

    projectDetail.tasks.push(newTaskToSet);

    const reciveNewTask = await projectDetail.save();

    res.status(200).send(projectDetail.tasks);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function updateTask(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const { idProject } = req.params;

    const { name, description, urgency, status } = req.body;

    const projectCheck = await Project.findById(idProject);
    if (!projectCheck) throw new Error('Not found a Project');

    const projectDetail = await Project.findOneAndUpdate(
      { _id: idProject, 'tasks._id': idTask },
      {
        $set: {
          'tasks.$.name': name,
          'tasks.$.description': description,
          'tasks.$.urgency': urgency,
          'tasks.$.status': status,
        },
      },
      { new: true }
    );
    if (!projectDetail) throw new Error('Not found a Task');

    const { tasks } = projectDetail;
    const filterTasks = tasks.filter((task) => task._id.toString() === idTask);

    res.status(200).send(filterTasks);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function deleteTask(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const { idProject } = req.params;

    const projectCheck = await Project.findById(idProject);

    if (!projectCheck) throw new Error('Not found a Project');

    const projectDetail = await Project.findByIdAndUpdate(
      idProject,
      { $pull: { tasks: { _id: idTask } } },
      { new: true }
    );

    if (!projectDetail) throw new Error('Not found a Project');

    if (projectCheck.tasks.length === projectDetail.tasks.length) throw new Error('Not found a Task');

    res.status(200).send(projectDetail.tasks);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function deleteAllTask(req: Request, res: Response) {
  try {
    const { idProject } = req.params;
    const projectDetail = await Project.findByIdAndUpdate(idProject, { $pull: { tasks: {} } });

    if (!projectDetail) throw new Error('Not found a Project');
    if (!projectDetail.tasks.length) throw new Error('Not found a Task');

    res.status(200).send(`Deleted completed successfully`);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function getAllComments(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const { idProject } = req.params;

    const projectDetail = await Project.findById(idProject, { tasks: { $elemMatch: { _id: idTask } } });

    if (!projectDetail) throw new Error('Not found a Project');
    if (!projectDetail.tasks.length) throw new Error('Not found a Task');
    if (!projectDetail.tasks[0].comments.length) throw new Error('Not found a Comment');

    res.status(200).send(projectDetail.tasks[0].comments);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function createComment(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const { idProject } = req.params;

    const { comment } = req.body;

    const projectCheck = await Project.findById(idProject);
    if (!projectCheck) throw new Error('Not found a Project');

    const projectDetail = await Project.findOneAndUpdate(
      { _id: idProject, 'tasks._id': idTask },
      {
        $push: {
          'tasks.$.comments': { comment: comment },
        },
      },
      { new: true }
    );
    if (!projectDetail) throw new Error('Not found a Task');

    const { tasks } = projectDetail;

    const filterTasks = tasks.filter((task) => task._id.toString() === idTask);

    res.status(200).send(filterTasks);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function deleteComment(req: Request, res: Response) {
  try {
    const { idProject } = req.params;
    const { idTask } = req.params;
    const { idComment } = req.params;

    const projectCheck = await Project.findById(idProject);
    if (!projectCheck) throw new Error('Not found a Project');

    const tasksCheck = projectCheck.tasks.filter((task) => task._id.toString() === idTask);
    if (!tasksCheck) throw new Error('Not found a Task');
    console.log(tasksCheck);

    const projectDetail = await Project.findOneAndUpdate(
      { _id: idProject, 'tasks._id': idTask, 'comments._id': idComment },
      {
        $pull: { 'tasks.$.comments': { _id: idComment } },
      },
      { new: true }
    );

    if (!projectDetail) throw new Error('Not found a Task');

    const { tasks } = projectDetail;
    const filterTasks = tasks.filter((task) => task._id.toString() === idTask);

    if (tasksCheck[0].comments.length === filterTasks[0].comments.length) throw new Error('Not found a comment');

    res.status(200).send(`Deleted completed successfully`);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

export {
  fetchTaskDetailsByIdProjectAndIdTask,
  fetchTaskDetailsByIdProject,
  createTask,
  updateTask,
  createComment,
  deleteComment,
  deleteTask,
  deleteAllTask,
  getAllComments,
};
