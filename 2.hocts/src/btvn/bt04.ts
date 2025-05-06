import { Controller, Route } from "../inc/btDecorator";

@Controller("/user")
class UserController{
    @Route("GET","/")
    getAll(){}
    @Route("POST","/")  
    create(){}
}

const routes = Reflect.getMetadata('routes', UserController);
console.log(routes);