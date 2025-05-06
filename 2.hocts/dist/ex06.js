"use strict";
// namespace Ex06{
//     export class User {
//         name:string;
//         constructor(){
//             this.name = "hoàng sơn";
//         }
//     }
//     export const getMessage = () =>{
//         console.log("unincode");
//     }
// }
// // sử dụng
// const user = new Ex06.User();
// console.log(user);
// Ex06.getMessage();
var Ex06;
(function (Ex06) {
    Ex06.getMessage = () => {
        console.log("unicode");
    };
})(Ex06 || (Ex06 = {}));
(function (Ex06) {
    Ex06.getName = () => {
        console.log("hoàng sơn");
    };
})(Ex06 || (Ex06 = {}));
Ex06.getName();
Ex06.getMessage();
