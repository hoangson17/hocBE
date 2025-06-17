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


// function identity<T>(arg: T): T {
//   return arg;
// }

// identity<string>("Hello"); // T = string
// identity<number>(123);     // T = number



// interface Box<T> {
//   value: T;
// }

// const numberBox: Box<number> = { value: 42 };
// const stringBox: Box<string> = { value: "hello" };


// interface ApiResponse<T> {
//   data: T;
//   status: number;
//   message?: string;
// }

// const userResponse: ApiResponse<{ username: string; email: string }> = {
//   data: {
//     username: "son123",
//     email: "son@gmail.com"
//   },
//   status: 200,
//   message: "Success"
// };

// vd2
// interface Pair<K, V> {
//   key: K;
//   value: V;
// }

// const numberToString: Pair<number, string> = {
//   key: 1,
//   value: "one"
// };

// const stringToBoolean: Pair<string, boolean> = {
//   key: "isAdmin",
//   value: true
// };


// Ví dụ 3: Dùng generic với class implements interface
// implements là gì?
// Dùng để ép một class phải tuân theo cấu trúc của một interface.

// Giúp class đảm bảo có đủ thuộc tính và phương thức được định nghĩa trước trong interface.

// interface Repository<T> {
//   getAll(): T[];
//   getById(id: number): T | undefined;
// }

// class UserRepo implements Repository<{ id: number; name: string }> {
//   private users = [
//     { id: 1, name: "Son" },
//     { id: 2, name: "An" },
//   ];

//   getAll() {
//     return this.users;
//   }

//   getById(id: number) {
//     return this.users.find(u => u.id === id);
//   }
// }
