// let a1 = 0;
// let b1 = a1 === undefined || a1 === null ? "ahihi" : a1;
// console.log(b1);


//tính lương thực nhận của một nhân viên
// let salary = 10000000;
// if(salary < 5000000){
//     console.log(salary);
// }else if(salary <= 10000000){
//     console.log(salary - (salary*(3/100)));
// }else if(salary >= 10000000){
//     console.log(salary - (salary*(5/100)));
// }


// let salary = 10000000;
// let tax;
// if(salary < 5000000){
//     tax = 0;
// }else if(salary <= 10000000){
//     tax = 3;
// }else if(salary >= 10000000){
//     tax = 5;
// }
// let income =salary - (salary *tax)/100;
// console.log(income);


const PRICE1 = 15000;
const PRICE2 = 13500;
const PRICE3 = 11000;
const RANGE1 = 1;
const RANGE2 = 5;
const RANGE3 = 120;
let total = 0;
let km = prompt();

if(km <= RANGE1){
    total+=RANGE1*PRICE1;
}else if(km <=5 ){
    total = RANGE1*PRICE1 + ((km-1)*PRICE2);
}else if(km >5 ){
    total = RANGE1*PRICE1 + (RANGE2 -RANGE1) * PRICE2+ ((km-5)*PRICE3);
}
console.log(total);


// let a =10;
// let b = a===null||a=== undefined?"ahihi":10;
// console.log(b);