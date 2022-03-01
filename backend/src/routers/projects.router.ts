import express from 'express';

import { fetchProjectDetails, fetchProjectDetailsById, setProject } from '../controllers/projects.controller';

const projectsRouter = express.Router();

projectsRouter.get('/fetchProjectDetails', fetchProjectDetails);
projectsRouter.get('/fetchProjectDetails/:id', fetchProjectDetailsById);
projectsRouter.post('/setProject', setProject);

export { projectsRouter };
