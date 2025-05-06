const path = require("path");
const fs = require("fs");
module.exports = {
    index:(req,res)=>{
        // console.log(process.cwd()); // lấy đường dẫn thư mục gốc
        // console.log(__dirname); // lấy dẫn thư mục 
        // console.log(__filename); // lấy đường dẫn file đang chạy
        // console.log(path.basename(__filename)); //lấy tên file
        // console.log(path.basename(__dirname)); //lấy tên thư mục

        // console.log(path.extname(__filename)); //lấy phần mở rộng của đường dẫn (.js,.....)

        // console.log(path.join(__dirname,"../data")); //nối đường dẫn
        // console.log(path.parse(__filename)); // tách đường dẫn thành nhiều phần 

        // console.log(path.resolve(__dirname,"../data")); // giống join

        // console.log(path.sep); //lấy gạch theo hệ điều hành

        const filePath = path.join(__dirname,"../data/data1.json");

        const fileBuffer = fs.readFileSync(filePath,{
            flag:"a+",
        })
        let data = fileBuffer.toString();
        if(!data){
            data = [];
        }else{
            data = JSON.parse(data);
        }
        data.push({
            name: `user ${data.length +1}`,
            email:`user${data.length+1}@gmail.com`
        })
        fs.writeFileSync(filePath,JSON.stringify(data));
        // console.log(filePath);
        //kiểm tra file có tồn tại không 
        // if(fs.existsSync(filePath)){
        //     // console.log("tồn tại");
        //     //đọc nội dung file 
        //     // const data = fs.readFileSync(filePath).toString();
        //     // console.log(data);

        //     fs.writeFileSync(filePath,JSON.stringify({name:"unicode"}));
        // }else(
        //     console.log("không tồn tại")
        // )


        res.json({
            status:"success",
        })
    },
    detail:(req,res)=>{
        const id = req.params.id;
        const slug = req.params.slug;
        return res.json({
            name:"chi tiết khóa học",
            id,
            slug,
            
        });
    },
};