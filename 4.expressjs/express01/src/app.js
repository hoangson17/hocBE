const express = require('express');
const app = express();
const routerIndex = require("./routes/index");
const router = require('./routes/index');
const authMiddleware = require('./middleware/auth.middleware');
app.use(express.json()); //middleware parser body
app.use(express.urlencoded());
// app.use(authMiddleware);
app.use(express.static("public"));
app.use("/api",routerIndex);

// Error handling
const notFoundErrorHandling = (req,res,next)=>{
    return res.status(404).json({message:"not found"});
}
// app.use(notFoundErrorHandling);

const errHandling = (err,req,res,next)=>{
    const errorObj = {message:err.message};
    if(err.errors){
        errorObj.errors = err.errors;
    }
    return res.status(err.status||500).json(errorObj);
}
app.use(errHandling);


module.exports = app;