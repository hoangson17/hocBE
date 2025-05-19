const HttpException = require("../exceptions/http.exception")
const userModel = require("../models/user")
const {isEmail} = require("../utils/string")
module.exports = {
    index: async(req,res)=>{
        const users = await userModel.findAll();
        console.log(users);
        return res.json({success:true,data:users});
    },
    find: async(req,res)=>{
        const id = req.params.userId;
        const user = await userModel.find(id);
        if(!user){
            throw new HttpException("user not found",404);
        }
        return res.json({title:"find",id,data:user})
    },
    create: async(req,res)=>{
        // viết logic thêm dữ liệu vào database
        // 1.validate  name: bắt buộc nhập
        // 2.validate email: bắt buộc nhập, định dạng email, không trùn lạp bản ghi khác trong database
        // 3.validate password : phải từ 6 kí tự trở lên

        /*
        lưu  ý :
        - xây dựng hàm bên model user
        - thông báo lôi, thành công rõ ràng
        - status code rõ ràng
        */

        if(!req.body){
            throw new HttpException("bad Request",400);
        }
        const body = req.body;
        const {name,email,password} = req.body;
        const newUser  = await userModel.create({name,email,password});
        const errors= {}
        if(!name){
            errors.name.require = "vui lòng nhập tên";
        }
        if(!email){
            errors.email = "vui lòng nhập email";
        }else{
            if(!isEmail(email)){
                errors.email = "email không đúng định dạng";
            }else{
                // kiểm tra unique email 
                const isExist = await userModel.existEmail(email);
                console.log(isExist);
                if(isExist){
                    errors.email = "email da ton tai";
                }
            }
        }
        if(!password || password.length < 6 ){
            errors.password = "vui lòng nhập password và phải lớn hơn 6 kí tự ";
        }
        const user = await userModel.create({name,email,password});
        if(!user){
            throw new HttpException("Server Error",500)
        }
        // if(newUser){
        //     throw new HttpException("thêm thành công",201,errors);
        // }
        // console.log(body);
        return res.status(201).json({
            title:"create",
            data:user,
            message: "create user success",
            
        });
    }
    ,
    updatePut:async(req,res)=>{
        const id = req.params.userId;
        const oldData = await userModel.find(id);
        const newData = {...oldData,...req.body};
        delete newData.id;
        // console.log(newData);
        const user = await userModel.updatePut(newData,id);
        return res.json({
            title: "update put",
            newData
        })
    },
    updatePatch :async(req,res)=>{
        const id = req.params.userId;
        console.log(id);
        const {name,email,password} = req.body;
        
        const errors= {}
        if(!isEmail(email)){
            errors.email = "email không đúng định dạng";
        }else{
            // kiểm tra unique email 
            const isExist = await userModel.existEmail(email, id);

            if(isExist){
                errors.email = "email da ton tai";
            }
        }
        if(!password || password.length < 6 ){
            errors.password = "vui lòng nhập password và phải lớn hơn 6 kí tự ";
        }
     
        const user = await userModel.updatePatch(req.body, id);
        if(!user){
            throw new HttpException("Server Error",500);
        }
        return res.status(201).json({
            success:true,
            data:user,
            message: "update user success",
            
        });
    },
    delete: async(req,res)=>{
        const id = req.params.userId;
        const user = await userModel.delete(id);
        if(user){
            throw new HttpException('delete fail',404)
        }
        return res.json({title:"delete"})
    },
    
};


