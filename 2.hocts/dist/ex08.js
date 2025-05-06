"use strict";
// type User = {
//     name: string;
//     email: string;
// };
// // biến tất cả thuộc tính thành tùy chọn
// const user:Partial<User>={
//     name:"hoàng sơn"
// }
// // biến tất cả thuộc tính thành bắt buộc
// const user1:Required<User>={
//     name:"hoàng sơn",
//     email:"ádsd",
// }
// biến tất cả thuộc tính thành readonly
// const user1:Readonly<User>={
//     name:"hoàng sơn",
//     email:"ádsd",
// }
// user1.name = "ahiahi";
// type role = "admin" | "user" | "guest";
// type role = {
//     admin:string;
//     user:string;
//     guest:string;
// }
// type Permisstion = Record<keyof role,string[]>;
// const permisstion:Permisstion={
//     admin:['read','create',"update","delete"],
//     user:['read','create'],
//     guest:['read'],
// }
// type User = {
//     name:string;
//     email:string;
//     age:number;
// };
// const user:Pick<User,"name"|"age"> = {
//     name:"hoang sơn",
//     age:21,
// }
// const user:Omit<User,"age">&{age:string} = {
//     name:"hoang sơn",
//     email:"aasdsda@gmail.com",
//     age:"33"
// }
// type Role={
//     admin:string;
//     user:string;
//     guest:string;
// }
// // type Role = "admin"|"user"|"guest";
// type UserRole = Exclude<keyof Role,"guest">;
// type UserRole1 = Extract<keyof Role,"guest">;
// const roles: UserRole = "admin";
// const roles1: UserRole1 = "guest";
// type Name = string | null | undefined;
// type NonNullableName = NonNullable<Name>;
// const fullname: NonNullableName = "hoàng sơn";
// // const fullname: NonNullableName = null;
// const getMessage = () =>{
//     return "học ts không khó";
// };
// const welcome: ReturnType<typeof getMessage> = "unicode";
// class User {
//     name:string = "hoàng sơn";
//     age:number = 21;
// }
// const customer:InstanceType<typeof User> = {
//     name:"hoàng sơn",
//     age:21,
// }
