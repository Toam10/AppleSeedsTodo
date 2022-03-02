import express, { Request, Response } from 'express';

import {
  fetchTaskDetails,
  fetchTaskDetailsByIdTask,
  fetchTaskDetailsByIdProject,
  createTask,
  updateTask,
  createComment,
  deleteComment,
  deleteTask,
  deleteAllTask,
} from '../controllers/tasks.controller';

const tasksRouter = express.Router();

tasksRouter.get('/fetchTaskDetails', fetchTaskDetails);
tasksRouter.get('/fetchTaskDetailsByIdProject/:idProject', fetchTaskDetailsByIdProject);
tasksRouter.get('/fetchTaskDetailsByIdTask/:idTask', fetchTaskDetailsByIdTask);
tasksRouter.post('/setTask/:idProject', createTask);
tasksRouter.put('/setTask/:idTask', updateTask);
tasksRouter.delete('/deleteTask', deleteAllTask);
tasksRouter.delete('/deleteTask/:idTask', deleteTask);
tasksRouter.post('/setComment/:idTask', createComment);
tasksRouter.delete('/setComment/:idTask/:idComment', deleteComment);

export { tasksRouter };
