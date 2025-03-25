// API = Application Programming Interface
//  - giao diện lập trình ứng dụng
//  - cho phép các ứng dụng giao tiếp với nhau

// các loại APi
// 1. API trong các thư viện  / framework (các hàm)
// 2. API trong các hệ điều hành 
// 3. API trong web (HTTP, Websocket)
// - có các chuẩn xây dựng API : Restfull , Soap, ....

/*
Cần xác định:
- URL 
- Method : GET, POST , PUT , PATCH , DELETE
- Header
- Params
- Body

Ví dụ:
- URL : https://api.unicode.vn?page=1&limit=10


Trong JavaScript, dùng fetch để make http request
*/

const getProducts = async () => {
    try {
        const respone = await fetch(`https://api.escuelajs.co/api/v1/products`);
        if (!respone.ok) {
            throw new Error("netwwork response was not ok!!!");
        }
        const data = await respone.text();
        const products = JSON.parse(data);
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}
// getProducts();

const getProduct = async (id) => {
    try {
        const respone = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!respone.ok) {
            throw new Error("netwwork response was not ok!!!");
        }
        const data = await respone.text();
        const products = JSON.parse(data);
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

getProduct(7);

const createProduct = async (data) => {
    const respone = await fetch(`https://api.escuelajs.co/api/v1/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const dataServer = await respone.json(); // tự động parser chuỗi json thành mảng / object
    console.log(dataServer);
}

// createProduct({
//     "title": "New Product Son",
//     "price": 10,
//     "description": "A description",
//     "categoryId": 1,
//     "images": ["https://placehold.co/600x400"]
// })


const uppdateProduct = async (data,id) => {
    const respone = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const dataServer = await respone.json(); // tự động parser chuỗi json thành mảng / object
    console.log(dataServer);
}
// uppdateProduct({
//     "title": "New Son",
//     "price": 10,
//     "description": "A description",
//     "categoryId": 1,
//     "images": ["https://placehold.co/600x400"]
// },69)


const deleteProduct = async (id)=>{
    const respone = await fetch(`https://api.escuelajs.co/api/v1/files/upload`, {
        method: "DELETE",
    });
    const dataServer = await respone.json(); // tự động parser chuỗi json thành mảng / object
    console.log(dataServer);
}

deleteProduct(69);