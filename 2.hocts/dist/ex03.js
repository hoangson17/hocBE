"use strict";
// const a:unknown ="hello anh em";
// const count: number = (a as string).length;
// const a:unknown ="hello anh em";
// const count: number = (<string>a).length;
// const HOST:unknown = "a";
// const user:{
//     host:string;
// } = {
//     host:HOST as string,
// };
// type User = {
//     name:string;
//     email:string;
// }
// let user:User | {} = {};
// nên dùng cái dưới
// type User = {
//     name:string;
//     email:string;
// }
// let user:User = {} as User;
// user = {}
// const a: string | number = 10;
// console.log(a.length);
// const someThing = (a:string|number)=>{
//     if((a as string).length){
//         console.log("độ dài :",(a as string).length);    
//     }else{
//         console.log(a.toLocaleString);
//     }
// }
// someThing("son");
// type List = "user" | "customer" | "service";
// const getData = (type:List)=>{
//     const typeAllower = ['user','customer','service'];
//     if(typeAllower.includes(type)){
//         console.log("ok");
//     }
// }
// // const getData = (type:"user" | "customer" | "service")=>{
// //     const typeAllower = ['user','customer','service'];
// //     if(typeAllower.includes(type)){
// //         console.log("ok");
// //     }
// // }
// getData("customer");
// type User = {
//     name:string;
//     readonly age:number;
// }
// const user:User = {
//     name:"son",
//     age:21,
// }
// user.name = "hoàng sơn";
// user.age = 22;
// class User {
//     readonly name:string = "";
//     constructor(readonly age:number){
//         this.age = 32;
//     }
// }
// const user = new User(10);
// user.name = "huihi";
// user.age =10;
// const number:readonly number[] = [1,2,3,4];
// number[0] = 10;
// Interface 
// interface User{
//     name: string;
//     readonly email: string;
// }
// const user:User = {
//     name: "an",
//     email:"a@gmail.com"
// }
// user.email = "ahihi";
