const express = require('express')
const multer  = require('multer')
const path = require('path');
const { v4: uuid } = require('uuid');
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware');
const uploadController = require('../controllers/upload.controller')
const productRoute = require("./products");
const HttpException = require("../exceptions/http.exception")
const router = express.Router();
const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename:(req,file,cb)=>{
        console.log(file);
        const allowTypes = ['image/png','image/jpg','image/jpeg','image/gif'];
        if(allowTypes.includes(file.mimetype)){
            const ext = path.extname(file.originalname);
            // console.log(ext);
            const newFile = uuid()+ext;
            console.log(newFile);

            cb(null,newFile);
        }else{
            cb(new HttpException("lỗi upload file",400));
        }
        
    },
}) ;


const upload = multer({ storage ,limits:{fileSize:1024*1024}});
// console.log(upload);

router.use("/products",productRoute);
module.exports = router

router.use(authMiddleware)
router.get('/users', userController.index);
// router.get('/users',authMiddleware ,userController.index); 
router.get('/users/:userId',userController.find);
router.post('/users',userController.create);
router.put('/users/:userId',userController.updatePut);
router.patch('/users/:userId',userController.updatePatch);
router.delete('/users/:userId',userController.delete);
router.use(upload.single("image"));
router.post('/upload', uploadController.upload);
router.delete('/upload',uploadController.delete);


/*
    router.method(path,callback)

    method : http method
    - get - không có body
    - post
    - put 
    - patch
    - delete

    GET /users --> liệt ke danh sách users
    GET /users/:userId --> lấy thông tin user theo id
    POST /users --> tạo user
    PUT|PATCH /users/:userId --> cập nhập user theo id
    DELETE /users/:userId --> xóa user theo id

    Endpoint = METHOD + URL


    x-ww-form-urlencoded(mặc định trong html form): name=hoàng+sơn&email=hoangson
    application/json:
    {
        "name":"hoàng sơn",
        "email":"a@gmail.com"
    }
*/