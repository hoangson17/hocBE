import {
  CLassDecorator,
  LogAccessor,
  LogParam,
  Logger,
  MethodDecorator,
  MinLength,
  PropertyDecorrator,
  ValidateBlacklist,
} from "./inc/decorator";
// @CLassDecorator
// @Logger("A")
class User {
  // @PropertyDecorrator
  name: string = " hoàng sơn";
  // @PropertyDecorrator
  email: string = "son@gmail.com";

  //   @MinLength(5)
  message: string | null = null;

  //   @MinLength(6)
  demo: string | null = null;

  private data: string[] = ["item1", "item2", "item3"];

  // @MethodDecorator

  getName(a: string) {
    console.log("getname", a);
  }
  @LogAccessor
  @ValidateBlacklist
  get latest() {
    return this.data[this.data.length - 1];
  }
  set latest(value) {
    this.data.push(value);
  }

  setName(@LogParam value: string,@LogParam a:string) {
    console.log("value ",value);
    console.log("a ",a);
  }
}
// const user = new User();
// user.message = "hoc node js";
// console.log(user.message);

// user.demo = "Hoàng sơn";
// console.log(user.demo);

const user = new User();
// user.latest = 'item4 admin';
// console.log(user.latest);

user.setName("acb","a")
