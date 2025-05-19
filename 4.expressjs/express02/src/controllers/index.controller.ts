import { Response, Request } from "express";

export const indexController = {
    index:(req: Request,res: Response)=>{
        return res.json({
            title:"index",
        });
    }
}