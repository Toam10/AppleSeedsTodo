import { Request, Response } from 'express';
import { Project } from '../models/project';

async function fetchProjectDetails(req: Request, res: Response) {
  try {
    const projectFilter = await Project.find();
    projectFilter.map((project) => {
      return project;
    });
    res.status(200).send(projectFilter);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function fetchProjectDetailsById(req: Request, res: Response) {
  try {
    const projectDetail = await Project.findById(req.params.id);

    if (!projectDetail) throw new Error('Not found a Project');

    res.status(200).send(projectDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function setProject(req: Request, res: Response) {
  try {
    const { name, description, goal, status, labels } = req.body;

    const newProject = new Project({ name, description, goal, status, labels });
    const reciveNewProject = await newProject.save();

    res.status(200).send(reciveNewProject);
  } catch (error) {
    res.status(400).send(error);
  }
}

export { fetchProjectDetails, fetchProjectDetailsById, setProject };
