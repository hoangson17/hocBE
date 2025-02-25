const users = ['user 1', 'user 2', 'user 3', 'user 4'];
users[users.length] = 'user 5';
users[users.length] = 'user 6';

users[1] = 'user 2 - update';

// let newArr = [];
// let userDel = 3;
// for(let i = 0;i<users.length;i++){
//     if(+userDel === users[i]){
//         continue;
//     }
//     newArr[newArr.length] = users[i];
// }
// console.log(newArr);

// const value = 'hoang an';
// let newArr = [];
// newArr[0]= value;
// for(let i = 0 ;i<=users.length;i++){
//     newArr[newArr.length] = users[i];
// }
// console.log(newArr);


let newArr = [];
const index = 100;
const value = "hoang son";
for (let i = 0; i < users.length; i++) {
    if (index >= 0 && index < users.length - 1 && i === index) {
        newArr[newArr.length] = value;
    }
    newArr[newArr.length] = users[i];
}
console.log(newArr)