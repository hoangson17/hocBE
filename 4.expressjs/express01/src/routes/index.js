const express = require('express')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware');
const productRoute = require("./products");
const router = express.Router();

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