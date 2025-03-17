let numbers = [3,4,6,2,5,8];

let bubbleSort = function(arr,n){
    let temp;
    for(let i = arr.length-1; i>=0;i--){
        for(let j = arr.length-1;j>=0;j--){
            if(arr[j] > arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    let newArr = [];
    // chèn thêm phần tử
    let count = 1;
    for(let i = 0 ; i<=arr.length-1 ;i++ ){
        if(n >= arr[i] && count === 1){
            newArr[newArr.length] = n;
            count--;
        }
        newArr[newArr.length]= arr[i];
        console.log(arr[i]);
        
    }
    return newArr;
}

console.log(bubbleSort(numbers,7))