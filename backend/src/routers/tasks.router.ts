import express from 'express';

import {
  getAllTaskDetails,
  getTaskDetailsByIdTask,
  getTasksDetailsByIdProject,
  createAndUpdateTask,
  changeTasksProcedure,
} from '../controllers/tasks.controller';

const tasksRouter = express.Router();

tasksRouter.get('/getAllTaskDetails', getAllTaskDetails);
tasksRouter.get('/getTasksDetailsByIdProject/:idProject', getTasksDetailsByIdProject);
tasksRouter.get('/getTaskDetailsByIdTask/:idProject/:idTask', getTaskDetailsByIdTask);
tasksRouter.put('/changeTasksProcedure/:idProject/:idTask', changeTasksProcedure);
tasksRouter.put('/createAndUpdateTask/:idProject', createAndUpdateTask);

export { tasksRouter };
