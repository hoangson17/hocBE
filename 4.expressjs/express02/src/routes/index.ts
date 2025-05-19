import "reflect-metadata";
import express from "express";
const route:any = express.Router();
import { indexController } from "../controllers/index.controller";
import userController from "../controllers/user.controller";
import Controller from "../Core/Controller";


route.get("/", indexController.index);
route.get("/user",Controller.load(userController,"index"));


export default route;