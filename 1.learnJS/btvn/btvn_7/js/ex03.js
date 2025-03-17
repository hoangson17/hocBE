const orders = [
    {
      orderId: 101,
      customer: "John",
      items: [{ name: "Laptop", price: 1000, quantity: 1 },
              { name: "Charger", price: 50, quantity: 3 }
      ],
    },
    {
      orderId: 102,
      customer: "Alice",
      items: [
        { name: "Phone", price: 500, quantity: 2 },
        { name: "Charger", price: 50, quantity: 3 },
      ],
    },
    {
      orderId: 103,
      customer: "Bob",
      items: [{ name: "Headphones", price: 200, quantity: 2 },
              { name: "Phone", price: 200, quantity: 2 }
      ],
    },
];

// Viết các hàm thực hiện các yêu cầu sau:


// Tính tổng tiền của từng đơn hàng.
let sum = 0;
orders.forEach((item)=>{
  item.items.map((i)=>{
    return sum += (i.price * i.quantity)
  })
})
console.log(sum);



// Tìm khách hàng có đơn hàng có tổng tiền cao nhất.
let max=0;
orders.forEach((item)=>{
  if(item.items.length > 1){
    sum = 0;
    for(let i = 0;i<item.items.length;i++){
      sum += item.items[i].price * item.items[i].quantity;
    }
    if(max < sum) max = sum;
  }else{
    item.items.forEach((j)=>{
      if(max <= j.price * j.quantity){
         max = j.price * j.quantity;
      }
    });
  }
})
console.log(max);


// Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.
let productList = {};
orders.forEach((item)=>{
  for (let index = 0; index < item.items.length; index++){
    if(!productList[item.items[index].name]){
      productList[item.items[index].name] = item.items[index].quantity;
    }else{
      productList[item.items[index].name] += item.items[index].quantity ;
    }
  }
})

console.log(productList);

