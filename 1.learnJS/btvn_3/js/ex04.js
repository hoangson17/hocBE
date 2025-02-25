// function isStrongPassword(password){
//     let capital;
//     let isUpperCase = false;
//     let isLowerCase = false;
//     let isNumber = false;
//     let isSpecial = false;
//     const number = "1234567890";
//     const SPECIAL = "!@#$%^&*()";
//     if(password.length >= 8){
//         for(let i = 0; i < password.length;i++){
//             capital = password.charAt(i);
//             if( capital >= 'A' && capital <= "Z"){
//                 isUpperCase = true;
//             }
//             if( capital >= 'a' && capital <= 'z'){
//                 isLowerCase = true;
//             }
//             if(number.includes(capital)){
//                 isNumber = true;
//             }
//             if(SPECIAL.includes(capital)){
//                 isSpecial =true;
//             }
//         }
//     }
//     if(!isLowerCase || !isUpperCase || !isNumber || !isSpecial) return false;
//     return true;
// }
// console.log(isStrongPassword("aqwueyA8#klk"));


// function isStrongPassword(password){
//     let capital;
//     let UpperCaseCount = 0;
//     let isLowerCase = false;
//     let isNumber = false;
//     let isSpecial = false;
//     const number = "1234567890";
//     const SPECIAL = "!@#$%^&*()";
//     if(password.length >= 8){
//         for(let i = 0; i < password.length;i++){
//             capital = password.charAt(i);
//             if( capital >= 'A' && capital <= "Z"){
//                 UpperCaseCount ++;
//             }
//             if( capital >= 'a' && capital <= 'z'){
//                 isLowerCase = true;
//             }
//             if(number.includes(capital)){
//                 isNumber = true;
//             }
//             if(SPECIAL.includes(capital)){
//                 isSpecial =true;
//             }
//         }
//     }
//     if(!isLowerCase || !UpperCaseCount < 2|| !isNumber || !isSpecial) return false;
//     return true;
// }
// console.log(isStrongPassword("aqwueyA8#klk"));



function patialMask (email){
    let hideEmail = "";
    let position = email.indexOf("@");
    let user = email.slice(0,position);
    //remain còn lại
    const remainCount = user.length - 4;
    return hideEmail = email.slice(0,4) + "*".repeat(remainCount)+email.slice(position);
}
console.log(patialMask("qweewqweq@gmail.com"));