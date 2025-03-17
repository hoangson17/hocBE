let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let getChunkArr = function(arr,size){
    let temp = [];
    let newArr = [];
    for(let i = 0 ; i < arr.length;i++){
        temp[temp.length] = arr[i];
        if(temp.length === size || i === arr.length-1){
            newArr[newArr.length] = temp;
            temp = [];
        }
        
    }
    return newArr;
}
// let getChunkArr = function (arr) {
//     let arrDel = [];
//     let newArr = [];
//     while (arr.length > 0) {
//         for (let i = 0; i < n; i++) {
//             arrDel[arrDel.length] = arr[i];
            
//         }
//         console.log(arrDel)
//         for(let i = 0 ;i<arr.length;i++){
//             newArr[newArr.length] = arrDel;
//         }
//         for(let i = 0 ;i<n;i++){
//             if(arr[i] === arrDel[i]){
//                 arr[i] = arr[i+1];
//                 arr.length =arr.length -1;
//                 arrDel[i] = arrDel[i+1];
//                 arrDel.length = arrDel.length -1;
//             }
//         }
        
//     }
//     return newArr;
// }
console.log(getChunkArr(numbers,2));
