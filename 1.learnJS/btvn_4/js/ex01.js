let numbers = [3,4,6,2,7,5,8];

let max = numbers[0];
let min = numbers[0];

const getMaxMin= function(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return `max = ${max} min = ${min}`;
}

console.log(getMaxMin(numbers))