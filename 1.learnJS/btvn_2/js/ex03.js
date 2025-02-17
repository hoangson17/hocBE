let checkFibonaci = function (n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return checkFibonaci(n - 1) + checkFibonaci(n - 2);
}

let getSumFi = function(n){
    let total = 0;
    for(let i = 0;checkFibonaci(i) < n;i++){
        total += checkFibonaci(i);
    }
    return total;
}

console.log(getSumFi(10));
  
