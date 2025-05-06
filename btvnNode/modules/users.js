const path = require('path');
const fs = require('fs');
module.exports ={ 
    index:(req,res)=>{
        const filePath = path.join(__dirname,"../data/data.json");
        const fileBuffer = fs.readFileSync(filePath,{
            flag:"a+",
        });
        let data = fileBuffer.toString();
        let user = "";
        let newUser;
        req.on('data',buffer => {
            user += buffer.toString();
            newUser = JSON.parse(user);
        });
        req.on('end',()=>{
            if(req.method === "POST"){
                if(!data){
                    data = [];
                }else{
                    data = JSON.parse(data);
                }
                data.push({
                    name:`${newUser.name}`
                });
                fs.writeFileSync(filePath,JSON.stringify(data));
                res.json({
                    status:"thêm thành công",
                    data
                })
            }else{
                res.end(JSON.stringify({
                    status: 404,
                    message:"not found"
                }));
            }
        })
    },
    search:(req,res)=>{
        const filePath = path.join(__dirname,"../data/data.json");
        const fileBuffer = fs.readFileSync(filePath,{
            flag:'a+',
        });
        const  data = JSON.parse(fileBuffer.toString());

        const url = require('url');
        const parsedURL = url.parse(req.url,true);
        const keyword = parsedURL.query.keyword?.toLowerCase();
        if(!keyword){
            res.end(JSON.stringify({
                status : 404,
                message: "not found"
            }));
            return;
        }

        if(req.method === "GET"){
            const results = data.filter(user => user.name.toLowerCase().includes(keyword));
            console.log(results);

            res.end(JSON.stringify({
                status : "tìm thấy",
                results,
                data
            }));
        }
    },
    delete:(req,res)=>{
        const filePath = path.join(__dirname,"../data/data.json");
        const fileBuffer = fs.readFileSync(filePath,{
            flag:'a+',
        });
        const  data = JSON.parse(fileBuffer.toString());
        const newData = data;
        const id = (req.params.id).slice(1);
        if(!id || id > data.length){
            res.end(JSON.stringify({
                status : 404,
                message: "not found"
            }));
            return;
        }

        if(req.method === "DELETE"){
            for (let i = 0; i < data.length; i++) {
                if(id == i+1){
                    data.splice(i,i+1);
                }
            }
            // console.log(data);
            fs.writeFileSync(filePath,JSON.stringify(data));
            res.end(JSON.stringify({
                status : "tìm thấy",
                data
            }));
        }
        

    }
}