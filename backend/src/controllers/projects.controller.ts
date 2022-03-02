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
    const { id } = req.params;

    const projectDetail = await Project.findById(id);

    if (!projectDetail) throw new Error('Not found a Project');

    res.status(200).send(projectDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function createProject(req: Request, res: Response) {
  try {
    const newProjectToSet = req.body;

    const newProject = new Project(newProjectToSet);
    const reciveNewProject = await newProject.save();

    res.status(200).send(reciveNewProject);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function updateProject(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const UpdateProjectToSet = req.body;

    const projectDetail = await Project.findByIdAndUpdate({ _id: id }, UpdateProjectToSet, {
      new: true,
    });
    if (!projectDetail) throw new Error('Not found a Project');

    res.status(200).send(projectDetail);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function deleteProject(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const projectDetail = await Project.findByIdAndDelete(id);
    if (!projectDetail) throw new Error('Not found a Project');

    res.status(200).send(projectDetail);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

async function deleteAllProject(req: Request, res: Response) {
  try {
    const projectDetail = await Project.deleteMany();
    if (!projectDetail.deletedCount) throw new Error('Not found a Project');

    res.status(200).send(`Deleted completed successfully, Deleted ${projectDetail.deletedCount} Projects`);
  } catch (error) {
    res.status(400).send((error as Error).message);
  }
}

export { fetchProjectDetails, fetchProjectDetailsById, createProject, updateProject, deleteProject, deleteAllProject };
