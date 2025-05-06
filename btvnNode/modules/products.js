const path = require('path');
const fs = require('fs');

module.exports = {
    review:(req,res)=>{
        const filePath = path.join(__dirname,"../data/data2.json");
        const fileBuffer = fs.readFileSync(filePath,{
            flag:"a+",
        })
        if(req.method === "GET"){
            let data = JSON.parse(fileBuffer.toString());
            const id = (req.params.id).slice(1);
            const review = data[id-1]
            return res.json({
                id,
                review
            })
        }else{
            return res.end(JSON.stringify({
                status: 404,
                message:"not found"
            }));
        }
    }
}