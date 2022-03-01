import {Request, Response} from "express";
import {projects} from "../fakeData/project.fakeData"

function getAllProjectDetails(req: Request,res: Response){
  try{
    res.status(200).send(projects);

  }catch(error){
    res.status(400).send(error)
  }
}

export {getAllProjectDetails};