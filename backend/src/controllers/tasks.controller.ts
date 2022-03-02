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
    const { idProject } = req.params;

    const taskDetails = await Task.findOne({ idProject });

    if (!taskDetails) throw new Error('Not found a Task');

    res.status(200).send(taskDetails);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function fetchTaskDetailsByIdTask(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const taskDetail = await Task.findById(idTask);
    if (!taskDetail) throw new Error('Not found a Task');

    res.status(200).send(taskDetail);
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

    const newTask = new Task(newTaskToSet);

    const reciveNewTask = await newTask.save();

    res.status(200).send(reciveNewTask);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function updateTask(req: Request, res: Response) {
  try {
    const { idTask } = req.params;

    const updateTaskToSet = req.body;

    const taskDetail = await Task.findByIdAndUpdate({ _id: idTask }, updateTaskToSet, {
      new: true,
    });
    if (!taskDetail) throw new Error('Not found a task');

    res.status(200).send(taskDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function deleteTask(req: Request, res: Response) {
  try {
    const { idTask } = req.params;

    const taskDetail = await Task.findByIdAndDelete(idTask);
    if (!taskDetail) throw new Error('Not found a task');

    res.status(200).send(taskDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function deleteAllTask(req: Request, res: Response) {
  try {
    const taskDetail = await Task.deleteMany();
    if (!taskDetail.deletedCount) throw new Error('Not found a task');

    res.status(200).send(`Deleted completed successfully, Deleted ${taskDetail.deletedCount} Tasks`);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function createComment(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const taskDetail = await Task.findById(idTask);
    if (!taskDetail) throw new Error('Not found a Task');

    const newCommentToSet = req.body;
    taskDetail.comments.push(newCommentToSet);

    const reciveNewComment = await taskDetail.save();

    res.status(200).send(reciveNewComment);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function deleteComment(req: Request, res: Response) {
  try {
    const { idTask } = req.params;
    const { idComment } = req.params;

    const TaskDetail = await Task.findById(idTask);
    if (!TaskDetail) throw new Error('Not found a Task');

    const commentDetails = TaskDetail.comments.find((comment) => comment._id.toString() === idComment);
    if (!commentDetails) return res.status(404).send('Not found this Comment');

    const FilteredComments: any = TaskDetail.comments.filter((comment) => comment._id.toString() !== idComment);

    TaskDetail.comments = FilteredComments;
    const reciveFilteredComments = await TaskDetail.save();

    res.status(200).send(reciveFilteredComments.comments);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

export {
  fetchTaskDetails,
  fetchTaskDetailsByIdTask,
  fetchTaskDetailsByIdProject,
  createTask,
  updateTask,
  createComment,
  deleteComment,
  deleteTask,
  deleteAllTask,
};
