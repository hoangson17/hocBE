const path = require("path");
const fs = require("fs");
const HttpException = require("../exceptions/http.exception")

module.exports ={
    upload:(req,res)=>{
        console.log(req.file);
        res.json(
            {
                data: req.file,
                message: "upload file succesfully",
                succes:true
            }
        )
    },
    delete:(req,res)=>{
        
        const {filename} = req.body;
        const filePath = path.join(__dirname,`../../public/uploads/${filename}`);
        // console.log(filePath);
        if(fs.existsSync(filePath)){
            fs.unlinkSync(filePath);
        }else{
            throw new HttpException("lỗi khi xóa file",400);
        }
        return res.json({
            message:"delete file successfully",
            success: true
        })
    }
}