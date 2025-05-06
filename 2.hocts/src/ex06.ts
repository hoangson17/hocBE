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



namespace Ex06{
    export const getMessage = () =>{
        console.log("unicode");
    }
}

namespace Ex06{
    export const getName = () =>{
        console.log("hoàng sơn");
    }
}

Ex06.getName();
Ex06.getMessage();