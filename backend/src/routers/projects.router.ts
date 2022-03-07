import express from 'express';

import {
  fetchProjectDetails,
  fetchProjectDetailsById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProject,
} from '../controllers/projects.controller';

import {
  fetchTaskDetailsByIdProjectAndIdTask,
  fetchTaskDetailsByIdProject,
  createTask,
  updateTask,
  createComment,
  deleteComment,
  deleteTask,
  deleteAllTask,
  getAllComments,
} from '../controllers/tasks.controller';

const projectsRouter = express.Router();

projectsRouter.get('/fetchProjectDetails', fetchProjectDetails);
projectsRouter.get('/fetchProjectDetails/:id', fetchProjectDetailsById);
projectsRouter.post('/setProject', createProject);
projectsRouter.put('/setProject/:id', updateProject);
projectsRouter.delete('/deleteProject/:id', deleteProject);
projectsRouter.delete('/deleteProject', deleteAllProject);

projectsRouter.get('/fetchTaskDetailsByIdProject/:idProject', fetchTaskDetailsByIdProject);
projectsRouter.get('/fetchTaskDetailsByIdProjectAndIdTask/:idProject/:idTask', fetchTaskDetailsByIdProjectAndIdTask);
projectsRouter.post('/setTask/:idProject', createTask);
projectsRouter.put('/setTask/:idProject/:idTask', updateTask);
projectsRouter.delete('/deleteTask/:idProject', deleteAllTask);
projectsRouter.delete('/deleteTask/:idProject/:idTask', deleteTask);
projectsRouter.get('/setComment/:idProject/:idTask', getAllComments);
projectsRouter.post('/setComment/:idProject/:idTask', createComment);
projectsRouter.delete('/setComment/:idProject/:idTask/:idComment', deleteComment);

export { projectsRouter };
