let numbers = [9,3,2,5,7,4,1,8,10,14,11];

let bubbleSort = function(arr){
    let temp;
    for(let i = 0 ; i < arr.length ;i++){
        for(let j = 0 ; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(numbers));