// interface A{
//     name: string;
// }

// interface B{
//     email: string;
// }

// interface C extends A,B{
//     age: number;
//     // getName():void;
//     getName:(a:string)=>void;
// }

// // const user: A & B & {age:number}={
// //     name:"hoàng sơn",
// //     email:"hoangson@gmail.com",
// //     age:21,
// // }

// const user:C = {
//     name:"hoàng sơn",
//     email:"hoangson@gmail.com",
//     age:21,
//     getName(a){
//         console.log("ahihi");
//     }
// }



// interface PersonInterface{
//     name:string;
//     email:string;
//     age:number;
// }

// interface AuthenticationInterface{
//     isAuth:boolean;
// }

// interface User{
//     token:string;
// }

// class Person implements PersonInterface{
//     // khai báo thuộc tính
//     name:string;
//     email:string;
//     age: number;
//     constructor(name:string,email:string){
//         this.name = name;
//         this.email = email;
//         this.age = 21;
//     }
//     getName():string{
//         return this.name;
//     }
//     setName(value:string):void{
//         this.name = value;
//     }
// }


// class User extends Person implements User {
//     token:string;
//     constructor(name:string,email:string){
//         super(name,email)
//         this.token = "123";
//     }
// }

// class Auth extends User implements AuthenticationInterface{
//     isAuth:boolean;
//     constructor(name:string,email:string){
//         super(name,email);
//         this.isAuth = false;
//     }
// }


// const person = new Person('hoàng sơn','son@gmail.com')
// console.log(person.getName());



// lớp trừu tượng
// abstract class User{
//     name:string;
//     abstract email: string; // thuộc tình trừu tượng
//     constructor(){
//         this.name = "ahihi";
//     }
//     abstract something():void;
// }

// class Auth extends User{
//     email: string;
//     constructor(){
//         super();
//         this.email = "a@gmail.com"
//     }
//     something(): void {
//         console.log("bhihi");
//     }
// };
// const auth = new Auth();
