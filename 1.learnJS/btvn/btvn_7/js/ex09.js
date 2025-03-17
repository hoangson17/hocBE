const transactions = [
    { id: 1, account: "A", type: "deposit", amount: 1000 },
    { id: 2, account: "B", type: "withdraw", amount: 200 },
    { id: 3, account: "A", type: "withdraw", amount: 500 },
    { id: 4, account: "C", type: "deposit", amount: 700 },
    { id: 5, account: "B", type: "deposit", amount: 300 },
  ];
//   Viết các hàm thực hiện các yêu cầu sau:
  
//   Tính số dư cuối cùng của từng tài khoản.
let balance = {};
transactions.forEach((item)=>{
    if(!balance[item.account]){
        balance[item.account] = 0;
        if(item.type === "withdraw"){
            balance[item.account] -= item.amount;
        }else{
            balance[item.account] += item.amount;
        }
    }else{
        if(item.type === "withdraw"){
            balance[item.account] -= item.amount;
        }else{
            balance[item.account] += item.amount;
        }
    }
})
console.log(balance);
//   Tìm tài khoản có số dư cao nhất.
console.log(Object.entries(balance).sort((a,b)=>{
    return b[1] - a[1];
})[0]);


//   Nhóm các giao dịch theo tài khoản, trong đó mỗi tài khoản có danh sách giao dịch của riêng nó.
let history = {};
transactions.forEach((item)=>{
    if(!history[item.account]){
        history[item.account] = item;
    }else{
       if(!Array.isArray(history[item.account])){
        history[item.account] = [history[item.account]];
       }history[item.account].push(item);
    }
})
console.log(history);
