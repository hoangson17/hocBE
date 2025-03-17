const getTotal= function(n){
    let total=0;
    for(let i = 0;i<=n;i++){
        total += i/n;
    }
    return total;
}

console.log(getTotal(5));