// function checkPrimeNumbers(a){
//     if(a<=1){
//         return false;
//     }
//     for(let i = 2;i<a;i++){
//         if(a%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkPrimeNumbers(6));


const getA = function () {
  setTimeout(() => {
    console.log("Get A");
  }, 1000);
};
const getB = function () {
  setTimeout(() => {
    console.log("Get B");
  }, 500);
};
const getC = function () {
  setTimeout(() => {
    console.log("Get C");
  }, 1500);
};

getA();
getB();
getC();