// function User(){
//     this.name = " hoàng sơn",
//     this.email = "contact@unicode.vn"
// }

// const user = new User();

// // kiểm tra mọt biến có phải Intance của một contructor không ?
// console.log(user instanceof User);

// console.log(user.constructor.name === "User");

// // const items = [];
// const items = {};
// if(items instanceof Array){
//     console.log("là mảng");
// }else{
//     console.log("không là mảng");
// }


// toán tử optionnal chaining (?.) để tránh lỗi không cần kiểm tra trước khi truy cập
// const a = null;
// console.log(a?.email);

// const a = {};

// const a = {
//     email:{
//         userName: "ahihi"
//     }
// };
// console.log(a?.email?.userName);

// const a = {
//     getName: function(){
//         console.log("ahihi");
//     }
// };
// a.getName?.();


// const users = ['item1', 'item2','item3','item4'];
// const user1 = "tran hoang son";
// const user2 = null;
// if(user2?.length){
//     user1.forEach?.((user)=>{
//         console.log(user);
//     })
// }else{
//     console.log("không có dữ liệu");
// }


// viết lại vòng lặp map bằng cách sử dụng prototype
const users = ['item1', 'item2','item3','item4'];

// let test = users.map((item,index)=>{
//     return`${index} - ${item}`
// })
// console.log(test);

// Array.prototype.map2 = function(func){
//     let newArr = [];
//     if(typeof func !== "function"){
//         return;
//     }
//     for(let i = 0 ;i < this.length;i++){
//         newArr[i] = func(this[i],i);
//     }
//     return newArr;
// }

// const newUser = users.map2(function(user,index){
//     return `${index} - ${user}`
// })

// console.log(newUser);


Array.prototype.reduce2 = function(callback,initalValue){
    const arr = this;
    if(typeof callback !== "function"){
        return;
    }
    let acc;
    for(let index = 0 ; index < arr.length ; index++){
        if(index == 0){
            if(initalValue === undefined){
            // không có initial --> chạy từ index = 1;
            acc = arr[index]
            continue;
        }
        acc = initalValue;
    }
    
    const resultCallback = callback(acc,arr[index],index);
    acc = resultCallback;
    }
    return acc;
};

const number = [5,2,4,3,10,20];
const result = number.reduce2(function(acc,cur,index){
    console.log(`acc: ${acc},cur: ${cur},index: ${index}`);
    return cur;
},0)
console.log(result);


const total = number.reduce2((total,number)=>{
    return total + number;
});
console.log(total);