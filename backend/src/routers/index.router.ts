import express from "express";

import  { getAllProjectDetails }  from "../controllers/index.controller";

const indexRouter= express.Router();

indexRouter.get("/",getAllProjectDetails)


export { indexRouter };