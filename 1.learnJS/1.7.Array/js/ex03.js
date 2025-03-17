// const numbers = [1,2,3,4,5,6,7,8];

// some()
/*
    -- trả về true/false
    -- trả về true nếu có ít nhất 1 lần lặp trả về truthy
*/

// const check = numbers.some((number)=>{
//     return number % 2 === 0;
// });

// console.log(check);


// every()

/*
    -- trả về true/false
    trả về true nếu tất cả các lần lặp trả về truthy
*/

// const check = numbers.every((number)=>{
//     return number % 2 === 0;
// })
// console.log(check);


// find()
// trả về phần tử đầu tiên tìm được dựa vào điều kiện trong callback

// const even = numbers.find((number)=>{
// return number % 2 === 0;
// })
// console.log(even);


// findLast()
// trả về phần tử cuối cùng tìm được dựa vào điều kiện callback 

// const even = numbers.findLast((number)=>{
// return number % 2 === 0;
// })
// console.log(even);


// findIndex()
// giống find() nhưng trả về index

// const index = numbers.findIndex((index)=>{
//     return numbers % 2 === 0 ;
// })
// console.log(index);


// findLastIndex() giống findLast nhưng trả về Index


// const customers = [
//     ["nguyễn văn a", "nguyenvana@gmail.com", 30],
//     ["nguyễn văn b", "nguyenvanb@gmail.com", 31],
//     ["nguyễn văn c", "nguyenvanc@gmail.com", 32],
// ]

// bài 1: xóa khách hàng có email = "nguyenvanb@gmail.com"

// let del = customers.splice(customers.findIndex((email)=>{
//     return email === "nguyenvanb@gmail.com";
// })-1,1);


// const index = customers.findIndex((customers)=>{
//     return customers.includes("nguyenvanb@gmail.com");
// });
// if(index !== -1){
//     customers.splice(index,1);
// }


// const newArr = customers.filter(function(email){
//     return !email.includes("nguyenvanb@gmail.com");
// })
// console.log(newArr)


// bài 2: tìm khách hàng có email nguyenvanb@gmail.com và tăng thêm 2 tuoi (dung map)

// const customers2 = customers.map((customer)=>{
//     if(customer.includes("nguyenvanb@gmail.com")){
//         customer[2] += 2;
//     }
//     return customer;
// });
// console.log(customers2);


// reduce(callback,initialValue)

// -- callback có 3 tham số 
//  - accmulator
//  - currentValue
//  - index 


// const numbers = [5,10,15,20,25,30];
// console.log(numbers);

// const result = numbers.reduce((acc,cur,index)=>{
//     console.log(acc,cur,index);
//     return cur;
// },0)
// console.log(result);


// const result = numbers.reduce((total,number,index)=>{
//     console.log(total,number,index);
//     return total + number;
// })
// console.log(result)


// const numbers = [1,2,8,-1,7];
//tìm số lớn nhất trong mảng trên (reduce)

// const numberMax = numbers.reduce((max,min)=>{
//     if(min>max) return min;
//     if(max> min) return max;
// })
// console.log(numberMax)


// const arr1 = [1,5,2,8];
// const arr2 = [2,5,3];
// const number = arr1.reduce((acc,cur)=>{
//     if(arr2.includes(cur)){
//         acc.push(cur);
//     }
//     return acc;
// },[])
// console.log(number);


// const numbers = [1,2,3,2,5,9,1]; //lọc trùng
// const newArr = numbers.reduce((acc,cur)=>{
//     console.log(acc);
//     if(!acc.includes(cur)){
//         acc.push(cur);
//     }
//     return acc;
// },[])
// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;


// const newArr = arr.reduce((acc,cur,index)=>{
//     console.log(acc,cur,index)
//     if(index % size === 0){
//         const sub = arr.slice(index,index+size);
//         acc.push(sub);
//     }    
//     return acc;
// },[])

// console.log(newArr);

// cách 2
// const result = arr.reduce((acc,item)=>{
//     //kiểm tra số lượng phần tử của mảng con cuối cùng
//     if(acc[acc.length -1].length < size){
//         acc[acc.length-1].push(item);
//     }else{
//         acc.push([item]);
//     }
//     return acc;
// },[[]]);

// console.log(result);


//làm phẳng mảng
// let numbers = [1, 2, [3, [4, [5]]]];

// let flatArr = (arr) => {
//     return arr.reduce((acc, cur) => {
//         if (!Array.isArray(cur)) {
//             acc.push(cur);
//         } else {
//            acc = acc.concat(flatArr(cur));
//         }
//         return acc;
//     }, []);
// }
// console.log(flatArr(numbers));


// 1.Shallow copy
// 1.1. dùng các phương thức trả về mảng mới

// 1.2. Spread 
// const b = [...a];
// 2. Deep copy
// chuyển array thành json, sau đó ngược lại
const json = JSON.stringify(a);
// const b = [...a];
const b = JSON.parse(json);
b[0] = "hoang an unicode";

console.log(a);
console.log(b);


// const users = [
//     ['user 1',"user1@gmail.com"],
//     ['user 2',"user2@gmail.com"],
//     ['user 3',"user3@gmail.com"],
// ]

// const user = users.find((user)=>{
//     return user.includes("user2@gmail.com");
// })
// user.push("ahihi");
// console.log(users);

//key trả về mảng chứa danh sách index
// const arr = Array(10).keys();
// arr.forEach((item,index)=>{
//     console.log(item,index);
// })

// // làm phân trang
// const range = Array.from(Array(10).keys()).map((item,index)=>{
//     return `<a href=?page=${index+1}">${index+1}</a>`;
// })
// console.log(range);