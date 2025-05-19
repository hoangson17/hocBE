import { Controller, Route } from "../inc/btDecorator";

@Controller("/users")
class UserController {
  @Route("GET", "/")
  getAll() {}

  @Route("POST", "/")
  create() {}
}

const routes = Reflect.getMetadata('routes', UserController);
console.log(routes);