const http = require("http");
const url = require("url");

const users = require("./modules/users")
const routers = require('./route');
const logger = require("./modules/logger");

const server = http.createServer((req, res) => {
    logger(req);
    const urlParse = url.parse(req.url, true);
    if(urlParse.path.includes('hack')){
        res.writeHead(403,'Content-type',"text/html;charset=utf-8");
        res.end('403 Forbiden');
        return;
    }
    const pathname = urlParse.pathname;
    let func;
    res.setHeader('Content-type',"text/html;charset=utf-8");
    for(let route in routers){
        const value = routers[route];
        const key = route.replace(/\:\w+/g,"(.+?)");
        const paramList = route.match(/\:\w+/g);
        const pattern = new RegExp(`^${key}$`);
        const match = pathname.match(pattern);
        if(match){
            // console.log(match);
            // console.log(paramList);
            const param = match[1];
            func = value;
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

            if(urlParse.search){
                const searchQuery = new URLSearchParams(urlParse.search);
                req.query = Object.fromEntries(searchQuery.entries());
            }
            else{
                req.query = {}
            }
            if(req.headers){
                req.get = (key)=> req.headers[key];
            }
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



const port = 3000;
server.listen(port, "localhost", () => {
    console.log(`đang chạy với server : http://localhost:${port}`);
})