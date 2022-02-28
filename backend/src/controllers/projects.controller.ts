import { Request, Response } from 'express';
import { Project, projects } from '../fakeData/project.fakeData';

async function getProjectDetails(req: Request, res: Response) {
  try {
    const projectDetail = await projects.filter((project) => project.id === req.params.id);

    // const projectDetail =await projects.findById(req.params.id);

    if (projectDetail.length === 0) return res.status(404).send('Not found a Project');

    res.status(200).send(projectDetail);
  } catch (error) {
    res.status(400).send(error);
  }
}

function getAllProjectDetails(req: Request, res: Response) {
  try {
    const projectFilter: Project[] = projects.map((project): Project => {
      // const { name, description, goal } = project;
      delete project.tasks;
      return project;
    });
    res.status(200).send(projectFilter);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function createProject(req: Request, res: Response) {
  try {
    const { name, description, goal, status: boolean } = req.body;

    // const newProject = new projects({ name, description, goal, status })
    // const reciveNewProject = await newProject.save();

    // res.status(200).send(reciveNewProject);
  } catch (error) {
    res.status(400).send(error);
  }
}
export { getAllProjectDetails, getProjectDetails, createProject };
