"use strict";
// type User = {
//     [key:string]:string|boolean|object;
// };
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
