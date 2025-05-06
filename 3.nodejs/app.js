const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const url = require("url");
// khởi tạo server 
// const server = http.createServer((req,res)=>{
//     const urlParse = url.parse(req.url,true);
//     const pathname = urlParse.pathname;
//     const queryString = urlParse.search;
//     console.log(pathname);
//     console.log(queryString);

//     const searchParam = new URLSearchParams(queryString);
//     const searchValue = searchParam.get("search");
//     console.log(`Search value: ${searchValue}`);

//     // res.statusCode = 404;
//     // const url = req.url;
//     //// console.log(`URL: ${url}`);
//     // const method = req.method;
//     // console.log(`Method: ${method}`);
//     // const xApikey = req.headers['x-api-key'];
//     // console.log(xApikey);

//     // let body ='';

//     // req.on('data',(buffer)=>{
//     //     body += buffer.toString();
//     // })

//     // return req.on('end',()=>{
//     //     console.log(body);
//     //     res.end(body);
//     // });



    
//     res.setHeader("x-api-key","ahihi");
//     // res.end("<h1>Học lập trình không khó</h1>");
//     const users=[
//         {
//             id:1,
//             name: "hoàng sơn"
//         },
//         {
//             id:2,
//             name: "hoàng nam"
//         },
//         {
//             id:3,
//             name: "hoàng hậu"
//         }
//     ]
//     res.end(JSON.stringify(users));
// })
const users = require("./modules/users")
const products = require("./modules/products");
const routers = require('./route')


const server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    const pathname = urlParse.pathname;
    // const func = routers[pathname];
    let func;
    // console.log(pathname);
    // if(typeof func === 'function'){
    //     return func(req,res);
    // }
    res.setHeader('Content-type',"text/html;charset=utf-8");
    for(let route in routers){
        const value = routers[route];
        const key = route.replace(/\:\w+/g,"(.+?)");
        const paramList = route.match(/\:\w+/g);
        const pattern = new RegExp(`^${key}$`);
        const match = pathname.match(pattern);
        if(match){
            console.log(match);
            console.log(paramList);
            // console.log(urlParse);
            const param = match[1];
            func = value;
            // xử lý url params

            if(paramList?.length){
                if(!req.params){
                    req.params ={}
                }
                for (let i = 0; i < paramList.length; i++) {
                    const param = match[i+1];
                    const paramName = paramList[i].replace(":","");
                    if(param && paramName){
                        req.params[paramName] = param;
                    }                    
                }
            }
            
            // if(param){
            //     if(!req.params){
            //         req.params ={}
            //     }
            //     req.params[paramList[0].replace(":","")]= param;
                
            // }
            // xử lý url query string
            if(urlParse.search){
                const searchQuery = new URLSearchParams(urlParse.search);
                req.query = Object.fromEntries(searchQuery.entries());
            }
            else{
                req.query = {}
            }
            // console.log(req.headers);

            //xử lý headers
            if(req.headers){
                req.get = (key)=> req.headers[key];
            }

            //xử lý répone
            res.json = (data)=>{
                res.setHeader('Content-type',"application/json;charset=utf-8");
                return res.end(JSON.stringify(data));
            }

            res.send = (data)=>{
                res.end(data);
            };

            res.status = (code) =>{
                res.statusCode = code;
                return res;
            }
            res.set = res.setHeader;
            break;

        }

        // console.log(pattern);
    }
    if(typeof func === 'function'){
        return func(req,res);
    }
    res.statusCode = 404;
    return res.end(JSON.stringify({
        status: 404,
        message:"not found"
    }));
})



const port = 6969;
server.listen(port, "localhost", () => {
    console.log(`đang chạy với server : http://localhost:${port}`);
})