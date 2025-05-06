const path = require("path");
const fs = require("fs");
module.exports = {
    index:(req,res)=>{
        // const users = ["user1","user2","user3","user4"]
        // // console.log(`status : `,req.query.status);
        // // console.log(`search : `,req.query.search);
        // // const apiKey = req.headers["x-api-key"];
        // // const apiKey = req.get("x-api-key");
        // // console.log(apiKey);


        // // return res.end(JSON.stringify(users))
        // res.set("x-abc","123");
        // return res.status("201").send("abc");
        const filePath = path.join(__dirname,"../data/data1.json");
        console.log(process.env.APP_NAME);
        console.log(process.env.APP_EMAIL);
        return res.json(JSON.parse(fs.readFileSync(filePath)))
    },
    detail:(req,res)=>{
        const id = req.params.id;
        return res.end(`User ${id}`);
    }
}