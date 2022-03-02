import express, { Request, Response } from 'express';

import {
  fetchTaskDetails,
  fetchTaskDetailsByIdTask,
  fetchTaskDetailsByIdProject,
  createTask,
  updateTask,
} from '../controllers/tasks.controller';

const tasksRouter = express.Router();

tasksRouter.get('/fetchTaskDetails', fetchTaskDetails);
tasksRouter.get('/fetchTaskDetailsByIdProject/:idProject', fetchTaskDetailsByIdProject);
tasksRouter.get('/fetchTaskDetailsByIdTask/:idTask', fetchTaskDetailsByIdTask);
tasksRouter.post('/setTask/:idProject', createTask);
tasksRouter.put('/setTask/:idTask', updateTask);

export { tasksRouter };
