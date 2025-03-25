// // import abc, {b as _b , c} from "./modules/home.js"; // có thể đặt tên thoải mái 
// import prooducts from "./modules/products.js";
// import * as home from "./modules/home.js";
// // phải viết default viết trước named

// // import {b as _b , c} from "./modules/home.js"; // phải trùng với biến ở file gốc => đổi tên dùng as
// // console.log(abc);
// // console.log(_b);
// // console.log(c);
// prooducts();
// console.log(home);
// // console.log(home.b);
// const {b , c, default :abc} =home;
// console.log(abc);
// console.log(c);
// console.log(b);


import { getAuth,getHash,getDate } from "./utils/index.js";

getAuth();
getHash();
getDate();