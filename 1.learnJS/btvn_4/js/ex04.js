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

console.log(getChunkArr(numbers,2));
