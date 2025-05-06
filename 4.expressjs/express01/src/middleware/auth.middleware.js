const HttpException = require("../exceptions/http.exception");

module.exports = (req,res,next)=>{
    //next là một hàm , hàm này đc gọi ---> cho phép đi tiếp 
    // console.log("auth middleware");
    const apikey = req.headers["x-api-key"];
    // console.log(`x-api-key`,apikey);
    // if(apikey === "unicode"){
    //     return next();
    // }
    next();
    // throw new HttpException("Unauthorrizad",401);
};