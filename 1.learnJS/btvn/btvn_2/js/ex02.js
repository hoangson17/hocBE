let getSum = function(n){
   if(n == 0){
        return 0;
    }else{
        return n + getSum(n-1);
    }
}
console.log(getSum(5));