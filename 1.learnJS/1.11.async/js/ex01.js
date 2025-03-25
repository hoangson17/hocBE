// Biến các tác vụ bất đồng bộ -> hoạt động đồng bộ

// 3 cách xử lý bất dồng bộ 

// 1. callback 
// 2. promise
// 3. async/await


// const downLoadImage = (callback)=>{
//     setTimeout(()=>{
//         const image = "abc.jpg"
//         if(typeof callback === "function"){
//             callback(image);
//         }
//     },2000)
// }

// const showMessage = ()=>{
//     console.log("show message");
// }

// downLoadImage(function(data){
//     console.log(data);
//     showMessage();
// });




// Chaining: a().b().c() 

// Promise : object đặc biệt dùng để xử lý các tác vụ bất đồng bộ

// 1. trạng thái của promise
// - pending --> chờ kết quả trả về
// - fulfilled --> kết quả trả về thành công
// - rejected --> kết quả trả về thất bại


/*
2. khởi tạo object promise

*/

// const myPromise = new Promise((resolve, reject) => {
//     // chứa logic của tác vụ bất dồng bộ
//     // khi nào tác cụ bất dồng bộ trả về giá trị thành công  --> gọi hàm resolve
//     // nếu tác vụ bất đồng bộ trả về dữ liệu thất  --> gọi hàm reject
//     setTimeout(() => {
//         const data = { name: "hoàng sơn", email: "contact@gmail.com" };
//         resolve(data);
//         // reject("lỗi network");
//     }, 2000)
// })
//  reject / resolve thằng nào gọi trước chạy trước
// console.log(myPromise);


// // 3. lấy dữ liệu từ promise
// const showMessage = ((data) => {
//     console.log("trả về kết quả thành công");
// })

// myPromise.then((data) => {
//     console.log(data);
//     showMessage();
// }).catch((error) => {
//     console.log(error);
// }).finally(()=>{
//     console.log("finnally");
// })

// const promise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("prmise2aa");
//     },1000)
// });

// myPromise.then((data)=>{
//     console.log(data);
//     // nếu muốn đưa giá trị vào resolve của promise then() ---> return giá trị tương ứng
//     // hoặc có thể return về một promise mới 
//     return promise2;
// }).then((data)=>{
//     console.log(data);
// });


// ---> promise Chaining




const getUser = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "user 1", salary: 1000 },
                { id: 2, name: "user 2", salary: 2000 },
                { id: 3, name: "user 3", salary: 3000 },
                { id: 4, name: "user 4", salary: 4000 },
            ]
            const user = users.find((user) => user.id === userId)
            resolve(user);
        }, Math.random() * 1000);
    })
}

// getUser(2).then((data)=>{
//     console.log(data);
// })

const ids = [1, 2, 4];
// const totalPromise = new Promise((resolve) => {
//     let count = 0
//     let total = 0;
//     for (let i = 0; i < ids.length; i++) {
//         getUser(ids[i]).then((data) => {
//             total += data.salary;
//             count ++;
//             if(count === ids.length){
//                 resolve(total);
//             }
//         });
//     }
// });


// totalPromise.then((data)=>{
//     console.log(data);
// })


// Promise.all --> resolve nhiều promise song song 
// - nhận vào một mảng chứa dánh sách các promise
// - trả về một mảng chứa các dữ liệu đã đc resolve

const promiseArray = ids.map((id) => getUser(id));
Promise.all(promiseArray).then((users)=>{
    const total = users.reduce((total,user)=>total +user.salary,0);
    console.log(total);
})