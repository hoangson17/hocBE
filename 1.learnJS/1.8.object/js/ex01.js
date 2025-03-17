//Object js
//- cấu tạo bởi key : value
//- key : truy cập vào đặc điểm cụ thể của đối tượng (thuộc tính)
//- value : giá trị của kuy có thể chứa bất kì kiểu dữ liệu nào (kể cảu object, function, ...)

// khai báo object (thường là số ít)

// const user = {
//     name : "hoang an",
//     email : "contact@gmail.com",
// };

// console.log(user);
// // 
// const customer = {};
// console.log(customer);
// // 
// const product = new Object();
// console.log(product);


// // thêm phần tử mới vào object
const user = {};
user.name = "hoang son";
user.email = "hoangson@gmail.com";
user.age = 22;
user['address'] = "ha noi"; // dùng khi có kí tự đặc biệt ở key
// console.log(user);

// // đọc giá trị thuộc tính 
// console.log(user.email);
// console.log(user['address']);

// cập nhập giá trị thuộc tính (xác định đc key cần cập nhập)
// user.email ="tranhoangson@gmail.com";
// console.log(user);

// xóa key trong object
// delete user.email;
// console.log(user);


// duyệt qua từng key của object
// for(let key in user){
//     console.log(key);
//     const value = user[key];
//     console.log(value);
// }

// const keys = Object.keys(user);
// keys.forEach((key)=>{
//     const value = user[key];
//     console.log(value);
// })

// bài tập 1
// const obj1 = {
//     name : "hoang son",
//     email : "hoangson@gmail.com",
// };
// const obj2 = {
//     course : "backend",
//     price : 1200,
// }

// const obj3 = {};

// for(let key in obj1){
//     obj3[key] = obj1[key];
// }
// for(let key in obj2){
//     obj3[key] = obj2[key];
// }
// console.log(obj3);


// Object.values() --> trả về mảng chứa tất cả value của 1 object

// Object.entries() --> trả về 1 mảng chứa cả key và value
// console.log(Object.entries(user));

// Object.fromEntries() --> biến mảng hai chiều thành object 
// const entries = [
//     ["name","hoang son"],
//     ["email","hoangson@gmail.com"],
//     ["age",33],
// ];
// console.log(Object.fromEntries(entries));


// Object.assign() -->gộp nhiều object và trả về object mới
// const obj1 = {
//     name : "hoang son",
//     email : "hoangson@gmail.com",
// };
// const obj2 = {
//     course : "backend",
//     price : 1200,
// }
// const obj3 = Object.assign(obj1,obj2); như này đầu sẽ bị thay đổi
// const obj3 = Object.assign({},obj1,obj2); // cách này obj1 không bị thay đổi
// console.log(obj3);
// console.log(obj1);



// bài tập 2 : chuyển object thành chuỗi sau (query string)
// keyword=hoc+lap+trinh$category=1&status=active
// const query = {
//     keyword : "hoc lap trinh",
//     category : 1,
//     status : "active",
// };

// let arr1 = Object.entries(query);
// const arr = arr1.map(item=>{
//     return item[0]+"="+item[1];
// }).join("$").replaceAll(" ","+");
// console.log(arr);

// let query2 = "keyword=hoc+lap+trinh&category=1&status=active";
// let arr = query2.replaceAll("+"," ").split("&");
// let query = arr.map(item =>{
//     return item.split("=");
// });

// let check = query.map(item=>{
//     let a = +item[1];
//     if(!isNaN(a)){
//        item[1] = +item[1];
//     }
//     return item;
// })
// console.log(Object.fromEntries(check));
// // console.log(Object.fromEntries(query));


//chuyển querryString thành object
// const queryString = "keyword=hoc+lap+trinh&category=1&status=active";
// const query = Object.fromEntries(
//     queryString.split("&").map((item)=>{
//         const itemArr = item.split("=");
//         itemArr[1] = itemArr[1].replaceAll("+"," ");
//         if(!isNaN(+itemArr[1])){
//             itemArr[1] = +itemArr[1];
//         }
//         return itemArr;
//     })
// );

// console.log(query);


const querryString = `keyword=hoc+lap+trinh&category=1&category=2&status=active&category=3&status=inactive`;

const query = {};
querryString.split("&").forEach((item)=>{
    const itemArr = item.split("=");
    itemArr[1] = itemArr[1].replaceAll("+"," ");
    if(!isNaN(+itemArr[1])){
        itemArr[1] = +itemArr[1];
    }
    const key = itemArr[0];
    if(!query[key]){
        query[key] = itemArr[1];
    }else{
        const value = query[key];
        if(!Array.isArray(value)){
            query[key] = [value];
        }
        query[key].push(itemArr[1]);
    }
});
console.log(query);
