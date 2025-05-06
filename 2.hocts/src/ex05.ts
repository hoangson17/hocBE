// type User = {
//     [key:string]:string|boolean|object;
// };

// interface User{
//     [key:string]:string|boolean|object;
// }

// const user= {
//     name: 'hoàng sơn',
//     email: 'son@gmail.com',
//     info:{
//         address: "hà giang",
//     },
//     status: false,
// };

// type User = {
//     [index:string]:any;
// }

// const user = ["an",false,13,null,undefined];

// Generics trong function
// function getValue<T>(name:T):{value:T}{
//     return {
//         value:name,
//     };
// }

// getValue<string>("sơn");

// const getValue = <T>(name:T):{value:T} =>{
//     return{
//         value:name,
//     };
// };

// const getValue = function<T>(name: T): { value: T } {
//   return {
//     value: name,
//   };
// };

// getValue<string>("an");

// class User<T>{
//     name:T;
//     constructor(name:T){
//         this.name = name;
//     }
//     showInfor<X>(age:X):void{
//         const data:{
//             name:T;
//             age:X;
//         }={
//             name:this.name,
//             age,
//         }
//         console.log();

//     }
// }

// const user = new User<string>("sơn");
// user.showInfor<number>(123);
// console.log(user);

// interface User<X,Y>{
//     name:X;
//     age:Y;
// }

// type User<X extends string | number , Y> = {
//     name:X;
//     age:Y;
// }

// const user:User<string,number> = {
//     name: "hoang son",
//     age:21,
// }

// Kết hợp extends vs keyof
// function getProperty<T,K extends keyof T>(obj:T,key:K){
//     if(obj){
//         return obj[key];
//     }
// }

// type User = {
//     name:string,
//     email:string,
//     age:number,
// }

// const user = {
//     name: "hoàng sơn",
//     email: "A@gmail.com",
//     age: 21,
// }

// getProperty<User,"name">(user,"name");
// getProperty<User,"email">(user,"email");
// // getProperty<User,"address">(user,"address");

// type User ={
//     name:string;
//     email:string;
// }

// const getUser =():Promise<User>=>{
//     return new Promise((resolve,reject)=>{
//         // resolve({
//         //     name:"hoàng sơn",
//         //     email:"son@gmail.com",
//         // });
//         reject("error");
//     });
// };

// const today:Date = new Date();

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// const getTodoList = async (token: string): Promise<Todo[]> => {
//   const headers:HeadersInit = {
//     "Content-Type": "application/json",
//   };
//   if(token){
//     headers.Authorization= `Bearer ${token}`;
//   }
//   const option: RequestInit = {
//     method: "GET",
//     headers
//   };
//   const respone = await fetch(
//     `https://jsonplaceholder.typicode.com/todos`,
//     option
//   );
//   if (!respone.ok) {
//     throw new Error(respone.statusText);
//   }
//   const data: Todo[] = await respone.json();
//   return data;
// };


// const getData = async <T>(token: string): Promise<T[]> => {
//   const headers:HeadersInit = {
//     "Content-Type": "application/json",
//   };
//   if(token){
//     headers.Authorization= `Bearer ${token}`;
//   }
//   const option: RequestInit = {
//     method: "GET",
//     headers
//   };
//   const respone = await fetch(
//     `https://jsonplaceholder.typicode.com/todos`,
//     option
//   );
//   if (!respone.ok) {
//     throw new Error(respone.statusText);
//   }
//   const data: T[] = await respone.json();
//   return data;
// };



