// *** try catch finally
// try{
//     const getA = ()=>{
//         console.log("oke");
//     }
//     getA();
//     // getB(); // lỗi

//     // Lỗi logic --> bắt lỗi
//     const a = 0;
//     // if(a === 0){
//     //     throw new Error("a phải là số khác 0");
//     // }
//     if(a === 0){
//         const error = new Error("a là số khác 0");
//         error.status = 400;
//         throw error;
//     }
    
// }catch(error){
//     console.dir(error);
//     console.log(error);
// }finally{
//     console.log("Finish");
// }

// console.log("chạy tiếp");



// async, await
// - async function 

/*
 - luôn trả về một promise
 - sử dụng từ khóa await
*/

// -từ khóa await

/*
- dùng để resolve promise
- các đoạn code bên dưới sẽ chờ cho đến khi promise resolve xong
- phải đặt trong async function
*/

// const demoPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const obj = {
//             getData: ()=>{
//                 return new Promise((resolve)=>{
//                     resolve("oke chưa");
//                 });
//             },
//         };
//         // resolve(obj);
//         reject("lỗi gì đó");
//     },2000);
// });

// const demoPromise2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("oke chưa 2");
//     },1000);
// });

// const something = async () => {
//     try {
//         const dataPs = await demoPromise;
//         const data = await dataPs.getData();
//         const data1 = await(await demoPromise).getData(); 
//         console.log(data);
//         console.log(data1);
//     } catch (error) {
//         console.log(error);
//     }finally{
//         console.log("finish");
//     }
    
// }

// something();




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
const ids = [1, 2, 4];

//  tính tổng salary của 3 user tring ids sử dụng asyns await
// let sum = 0;
// const showTotal = async () =>{
//     for(let i = 0;i < ids.length ;i++){
//         const data = await getUser(ids[i]);
//         sum += data.salary;
//     }
//     console.log(sum);
// }
// showTotal();
const showTotal = async () =>{
    const users = await Promise.all(ids.map((id)=>getUser(id)));
    const total = users.reduce((total,user)=>total +user.salary,0)
    console.log(total);
}
showTotal();


