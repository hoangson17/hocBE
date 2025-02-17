// cách 1

// let makeCaculater = function(a,b,func){
//     return func(a,b);
// }

// let getSum = function(a,b){
//     return a+b;
// }
// const getMinus = function(a,b){
//     return a-b;
// }
// const getMutilp = function(a,b){
//     return a*b;
// }
// const getDivide = function(a,b){
//     if(b!=0){
//         return a/b;
//     }else{
//         return "vui lòng nhập b khác 0";
//     }
// }

// console.log("tổng : "+makeCaculater(10,2,getSum));
// console.log("hiệu : "+makeCaculater(10,2,getMinus));
// console.log("tích : "+makeCaculater(10,2,getMutilp));
// console.log("thương : "+makeCaculater(10,0,getDivide));


// cách 2:

let makeCaculater = function(func,...rest){
    return func(...rest);
}

console.log("tổng : "+makeCaculater(function(a,b){
    return a+b;
},10,20));
console.log("tổng : "+makeCaculater(function(a,b){
    return a-b;
},10,20));
console.log("tổng : "+makeCaculater(function(a,b){
    return a*b;
},10,20));
console.log("tổng : "+makeCaculater(function(a,b){
    return a/b;
},10,20));
