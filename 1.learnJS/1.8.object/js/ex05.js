// tham chiếu 
// const user = {
//     name : "hoang son",
//     email : "contact@unocode.com.vn",
// };

// const customer = Object.assign({},user);
// const customer = {...user};
// const json = JSON.stringify(user); // chuyển tự động về json
// const customer = JSON.parse(json);
// customer.name = "unicode";

// console.log(user);

// ** không so sánh đc hai object 



// Enhanced Object Literal
// const fullname = "hoang son";
// const email = "hoangson03@gmail.com";
// let age;

// const getName = () =>{
//     console.log("hoang son");
// }

// // const user = {
// //     fullname : fullname,
// //     email : email,
// // };
// // ==> khi biến và value trùng thì 
// const user = {
//     fullname,
//     email,
//     age,
//     getName,
//     getEmail(){
//         console.log("contact@unicode.vn");
//     },

// };
// console.log(user);



// Destructuring : phá vỡ cấu trúc Object, Array để truy cập vào các key , phần tử và gán thành biến riêng biệt
// const user = {
//     fullname : "hoang son",
//     email : "contact@gmail.com",
//     age : 32,
//     address : "hà nội",
//     status : undefined,
// }

// // const fullname = user.fullname;
// // const email = user.email;

// // const {fullname,email} = user;

// const {fullname:username,email,status= "active",...rest} = user;
// // trường hợp null không gán đc giá trị trực tiếp được -- undefine gán đc giá trị mặc định
// console.log(username);
// console.log(email);
// console.log(rest);
// console.log(status);




// const users = ["hoàng sơn", "hoangson@gmai.com",32,"hà nội"];
// // const [fullname,email,age,address] = users;
// const [fullname,email, ,address] = users;
// console.log(fullname);
// console.log(email);
// console.log(address);


// const info = {
//     displayName : "hoang son",
//     emails : [
//         {
//             email:"contact@unicode.vn",
//         },
//     ],
// };

// Destructuring ra 2 biến displayName và email chỉ trong một dùng 1 dòng
// const {displayName,emails: [{email}] } = info;

// console.log(displayName);
// console.log(email);


const data = [
    {
        id:1,
        name: "item 1",
    },
    {
        id:2,
        name: "item 2",
    },
    {
        id:3,
        name: "item 3",
    }
];

// thêm 1 phần tử mới nhưng không làm thay dổi phần tử ban đầu
// const newData =[...data,{id:4,name:"item 4"}];
// console.log(data);
// console.log(newData);


// sửa phần tử nhung không thay đổi mảng ban đầu
// ... là spress
// const newData = [...data].map((item)=>{
// if(item.id === 2){
//         return{
//             ...item,
//             name: "item 2.1",
//         };
//     }
//     return item;
// })

// console.log(newData);
// console.log(data);



// Classes

// class User{
//     #income; //private
//     constructor(name,email,income){
//         this.name = name;
//         this.email = email;
//         this.#income = income;
//     }

//     getName(){
//         return this.name;
//     }
//     getEmail(){
//         return this.email;
//     }
//     getIcome(){
//         return this.#income;
//     }
    
// }

// class Auth extends User{
//     constructor(name,email,income){
//         super(name,email,income)
//         this.status = true;
//     }
//     getInfo(){
//         return `-Name: ${this.name} - email: ${this.email}`;
//     }
    
//     static message = "ahihi";

//     static getMessage(){
//         return "unicode";
//     }

// }


// const auth = new Auth("hoàng sơn","contact@gmail.com",1000);
// console.log(auth);
// console.log(auth.getIcome());
// console.log(auth.status);
// console.log(Auth.message);
// console.log(Auth.getMessage());



// class Person {
//     #data = ['item1','item2',"item3"];
//     // sử dụng hàm như thuộc tính
//     get latest(){
//         return this.#data[this.#data.length - 1];
//     }
//     set latest(value){
//         this.#data.push(value);
//     }
// }
// const person = new Person();
// person.latest = "item4";
// console.log(person.latest);


// const users = [
//     "user1",
//     "user2",
//     "user3",
//     "user4",
//     "user5",
// ]
// console.log(users.length);
// users.length = 2; //setter
// console.log(users);


// document.body.innerHTML = `ahihi`; //setter
// console.log(document.body.innerHTML); //getter

