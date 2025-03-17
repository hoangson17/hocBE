const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Phone", category: "Electronics", price: 800 },
    { id: 3, name: "Shirt", category: "Clothing", price: 40 },
    { id: 4, name: "Shoes", category: "Clothing", price: 60 },
    { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

// lọc các sản phẩm có category === "Electronics"
let filter = () => products.map((item) => {
    if (item['category'] === "Electronics") {
        return console.log(item);;
    }
    return;
})
filter();

// Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".

let sum = 0;
products.forEach((item) => {
    if (item['category'] === "Electronics") {
        sum += item.price;
    }
})
console.log("tổng tiền sản phẩm Electronics : " + sum);


// Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.
let newProducts = {}
products.forEach((item) => {
    if (!newProducts[item.category]) {
        newProducts[item.category] = [];
    }
    newProducts[item.category].push(item);
});
console.log(newProducts);