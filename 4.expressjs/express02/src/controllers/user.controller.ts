import { Request, Response } from "express";
import UserService from "../services/user.service";
import "reflect-metadata";
import { Injectable } from "../Core/decorators";



@Injectable
export default class userController{
    constructor(private userService: UserService){}
    index(req:Request,res:Response){
        const users = this.userService.findAll();
        res.json({data:users})
    }

    private something(){
        return "something";
    }
}



