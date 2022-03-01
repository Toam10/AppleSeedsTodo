import express from 'express';

import { getAllProjectDetails, getProjectDetails, createProject } from '../controllers/projects.controller';

const projectsRouter = express.Router();

projectsRouter.get('/getProjectDetails/:id', getProjectDetails);
projectsRouter.get('/getAllProjectDetails', getAllProjectDetails);
projectsRouter.post('/createProject', createProject);

export { projectsRouter };
