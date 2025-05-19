import express, { NextFunction, Request, Response } from "express";
import { indexController } from "./controllers/index.controller";
import indexRoute from "./routes/index";
import morgan from "morgan";

const app:any = express();
app.use(morgan('dev'));
const port = process.env.PORT || 3000;
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.set('Access-Control-Allow-Origin',"http://127.0.0.1:5500");
    res.set('Access-Control-Allow-Headers',"*");
    next();
})
app.use("/api", indexRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});