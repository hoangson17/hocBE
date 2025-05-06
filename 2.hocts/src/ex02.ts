// const numbers:number[] = [1,2,3,4,5];

// const user:string[] = ['user1','user2','user3','user4'];

// const user:[string,string,number,boolean] = ["hoang an","son@gmail.com",33,false];

// user.push("a");

// ? có cũng đc ko có cx đc
// const user: { name: string; email: string; age: number; status?: boolean } = {
//   name: "hoang son",
//   email: "son@gmail.com",
//   age: 32,
// };

// const users:{name:string;age:number;status?:boolean}[] = [
//     {
//         name: "hoang son",
//         age:21,
//     },
//     {
//         name: "hoang hau",
//         age:22,
//     },
//     {
//         name: "hoang hung",
//         age:26,
//     },
//     {
//         name: "hoang tuan",
//         age:24,
//         status:false,
//     },
// ]

// enum Status{
//     PENDING = "pending",
//     DONE = "done",
//     ERROR = "error",
// }

// console.log(Status.DONE);

// let statusText: Status = Status.DONE;

// // type
// type User = {
//     name: string;
//     email: string;
//     age: number;
//     status?: boolean;
// };

// const user: User = {
//     name:"hoang son",
//     email:"son@gmail.com",
//     age:21,
// };

// const users:User[]=[
//     {
//         name: "hoang son",
//         email:"son@gmail.com",
//         age:21,
//     }
// ];

// interface User {
//     name: string;
//     email: string;

// }

// interface Person extends User{
//     age: number;
// }

// const person:Person = {
//     name:"hoang son",
//     email : "@",
//     age:21
// }

// Union
// const statusText: "pending" | "done" | "error" = "pending";

// const a:string|number = "a";

// type User = {
//     name: string;
//     age: number;
// }

// type UserOrNull = User|null;
// let user:UserOrNull = null;
// // let user:User|null = null;
// let check:boolean =true;

// if(check){
//     user = {
//         name:"hoang son",
//         age:32,
//     };
// }

// type A = {
//     name:string;
//     age:number;
// }

// type B = A & {
//     email:string;
// };

// const b:B={
//     name:"hoang an",
//     age :21,
//     email:"@",
// }

// const handle = (a:number,callback:()=>void):void=>{
//     callback();
//     console.log(a);
// }
// // const handle = (a:number,callback:()=>string|number):void=>{
// //     callback();
// //     console.log(a);
// // }

// handle(1,()=>{
//     console.log("someThing");
// });

// const debounce = (callback:(...args:any[])=>void,timeout:number = 300)=>{
//     let timer:number|undefined;
//     return (...args:any[])=>{
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             callback(...args);
//         },timeout);
//     };
// };

// const saveInput = ():void=>{
//     console.log("saving data");
// }

// const processChange = debounce((a)=>saveInput(),1000);

// interface ERROR extends Error {
//     status:number;
// }

// interface CustomError extends Error {
//   status?: number;
// }
// const getData = async () => {
//   try {
//     const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
//     if (!response.ok) {
//       const error: CustomError = new Error("Network response was not ok");
//       error.status = response.status;
//     }
//     return response.json();
//   } catch (error) {
//     if (error instanceof Error) {
//       const err: CustomError = error;
//       console.log(err.status);
//       console.log(err.message);
//       console.log(err.stack);
//     }
//   }
// };


