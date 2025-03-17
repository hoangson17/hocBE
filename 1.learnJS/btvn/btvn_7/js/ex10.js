const inventory = [
    { item: "Laptop", type: "import", quantity: 10 },
    { item: "Mouse", type: "import", quantity: 50 },
    { item: "Laptop", type: "export", quantity: 4 },
    { item: "Keyboard", type: "import", quantity: 20 },
    { item: "Mouse", type: "export", quantity: 10 },
  ];
//   Viết các hàm thực hiện các yêu cầu sau:
  
//   Tính số lượng tồn kho của từng sản phẩm.
let inventoryList = {};
inventory.forEach((item)=>{
    if(!inventoryList[item.item]){
        inventoryList[item.item] = 0;
        if(item.type === "import"){
            inventoryList[item.item] += item.quantity;
        }else{
            inventoryList[item.item] -= item.quantity;
        }
    }else{
        if(item.type === "import"){
            inventoryList[item.item] += item.quantity;
        }else{
            inventoryList[item.item] -= item.quantity;
        }
    }
});

console.log(inventoryList);
//   Tìm sản phẩm có số lượng tồn kho cao nhất.
console.log(Object.entries(inventoryList).sort((a,b)=>{
    return b[1] - a[1];
})[0]);
//   Nhóm danh sách nhập xuất theo sản phẩm, trong đó mỗi sản phẩm có lịch sử nhập xuất riêng.
let newList = {};
inventory.forEach((item)=>{
    if(!newList[item.item]){
        newList[item.item] = item;
    }else{
        if(!Array.isArray(newList[item.item])){
            newList[item.item] = [newList[item.item]];
        }newList[item.item].push(item);
    }
});
console.log(newList);