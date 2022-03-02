import express from 'express';

import {
  fetchProjectDetails,
  fetchProjectDetailsById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProject,
} from '../controllers/projects.controller';

const projectsRouter = express.Router();

projectsRouter.get('/fetchProjectDetails', fetchProjectDetails);
projectsRouter.get('/fetchProjectDetails/:id', fetchProjectDetailsById);
projectsRouter.post('/setProject', createProject);
projectsRouter.put('/setProject/:id', updateProject);
projectsRouter.delete('/deleteProject/:id', deleteProject);
projectsRouter.delete('/deleteProject', deleteAllProject);
export { projectsRouter };
