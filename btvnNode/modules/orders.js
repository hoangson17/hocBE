const path = require('path');
const fs = require('fs');

module.exports = {
    index:(req,res)=>{
        const filePath = path.join(__dirname,"../data/orders.json");
        const fileBuffer = fs.readFileSync(filePath,{
            flag:"a+",
        });
        if(req.method === "GET"){
            let data = JSON.parse(fileBuffer.toString());
            return res.end(JSON.stringify({
                data,
            }))
        }else{
            return res.end(JSON.stringify({
                status:404,
                message: "not found",
            }))
        }
    },
    create:(req,res)=>{
        const filePath = path.join(__dirname,"../data/orders.json");
        const fileBuffer = fs.readFileSync(filePath,{
            flag:'a+',
        });
        let data = fileBuffer.toString();
        let order = "";
        let newOrder;

        req.on('data',buffer =>{
            order += buffer.toString();
            newOrder = JSON.parse(order);
        });

        req.on('end',()=>{
            if(req.method === "POST"){
                if(!data){
                    data=[];
                }else{
                    data = JSON.parse(data);
                }
                data.push({
                    order: `${newOrder.order}`,
                    name: `${newOrder.name}`,
                    evaluate: `${newOrder.evaluate}`
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

    detail:(req,res)=>{
        const filePath = path.join(__dirname,"../data/orders.json");
        const fileBuffer = fs.readFileSync(filePath,{
            flag:'a+',
        });
        const  data = JSON.parse(fileBuffer.toString());
        const id = (req.params.orderId).slice(1);
        // console.log(id);
        // console.log(data);
        if(req.method === "GET"){
            const result = data[id-1];
            res.end(JSON.stringify({
                id,
                result
            }))
                
            
        }else{
            res.end(JSON.stringify({
                status : 404,
                message: "not found"
            }));
            return;
        }
    }
}