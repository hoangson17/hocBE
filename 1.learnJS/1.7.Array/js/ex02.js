// console.log(Array.prototype);

const users = ['user1', 'user2', 'user3', 'user4'];
// console.log(users);


// //at(index) -->lấy phần tử mảng theo index
// console.log(users.at(1));

//concat(arr1,arr2,...) --> nối các mảng thành một mản lớn
// console.log(users.concat(['user5','user6'],[1,2,3]));

// const newUser = users.concat('user5',['user6']);
// console.log(newUser);

//fill (value) -->cập nhập các phần tử mảng thành môt giá trị giống nhau() , thay dổi mảng ban đầu
// console.log(users.fill("an"));
// console.log(users);

// //indexOf(value) --> tìm phần tử trong mảng nếu tìm thấy trả về giá trị tìm được 

// console.log(users.indexOf("user2"));

// // lastIndexOf()

// //includes(value) tìm phần tử trong mảng ,tìm thấy trả về true

// //slice(start,end) --> cắt mảng từ start dến end-1
// console.log(users.slice(2,3));

// //join() --> nối các phần tử mảng thành chuỗi 
// console.log(users.join(" "));
// console.log(users.join(","));

//sort() --> sắp xếp mảng theo thứ tự tăng dần, thay doi mảng ban đầu
// const arr = ['tung','van','an','dung','anh'];
// arr.sort();
// console.log(arr);

// // không so sánh được số
// const numbers = [1,5,10,8,100];
// numbers.sort();
// console.log(numbers);


// const numbers = [1,5,10,8,100];
// numbers.sort(function(a,b){
//     // a= phần tử sau
//     // b = phần tử trước
//     // console.log(`a = ${a} , b = ${b}`);
//     // nếu hàm này return về giá trị âm  --> dổi chỗ sắp xếp lại
//     // if(b<a){
//     //     return -1;
//     // }
//     //tăng dần 
//     // return a-b;
//     //giảm dần 
//     return b-a;
// });
// console.log(numbers);

//reverse() --> đảo ngược mảng ( thay dổi mảng ban đầu và trả về mảng mới)
// users.reverse();
// console.log(users);



//push() --> thêm phần tử vào cuối mảng (và trả về số lượng phần tử sau khi thêm)
// console.log(users.push("item1","item2","item3"));
// console.log(users)


//unshift() --> thêm phần tử vào đầu mảng() và trả về số lượng phần tử sau khi thêm)
// console.log(users.shift("item1","item2","item3"));
// console.log(users);


//pop() -->xóa phần tử cuối mản và trả về gá trị cần xóa
// console.log(users.pop());
// console.log(users);


//shift() ==>xóa giá trị đầu mảng và trả về giá trị cần xóa
// console.log(users.shift());
// console.log(users);


//splice(index,count) --> xóa count phần tử từ index ( thay dổi mảng ban đầu , trả về mảng mới tương ứng với phần tử đã xóa)
// console.log(users.splice(1,2));
// console.log(users.splice(1,2,"a",'b',"c")); // xóa sau đó thêm và vị trí đó các phần tử
// console.log(users);

// flat làm phẳng mảng
// const numbers = [1,2,[3,[4,[5]]]];
// console.log(numbers);
// const newArr = numbers.flat(Infinity); 
// console.log(newArr);

//kiểm tra một biến có phải mảng không 
// Array.isArray(tên biến)


// bt1
// const customers= [
//     "Nguyễn Đình Văn",
//     "Tạ Hoàng An",
//     "Tô Anh Dũng",
//     "Nguyễn Văn Anh",
// ];
// // sắp xếp mảng trên theo tên tăng dần (dùng hàm sort)


// const getLastName = (fullName)=>{
//     return fullName.split(" ").slice(-1).join();
//     return lastName = fullName.slice(fullName.lastIndexOf(" ")+1);
// }

// customers.sort(function(a,b){
//     if(getLastName(b)>getLastName(a)){
//         return-1;
//     }
// });

// console.log(customers);



// let fullName = "tạ    hoàng  an";
// let newArr = fullName.split(" ");
// fullName = [];
// for(let index in newArr){
//     if(newArr[index] === ""){
//         continue;
//     }
//     fullName.push(newArr[index].charAt(0).toUpperCase()+newArr[index].slice(1));
// }
// console.log(fullName.join(" "));


let numbers = [1, 2, [3, [4, [5]]]];

// const flatArray = (arr) =>{
//     let newArray = [];
//     for(let index in arr){
//         if(!Array.isArray(arr[index])){
//             newArray.push(arr[index]);
//         }else{
//             newArray = newArray.concat(flatArray(arr[index]));
//             // newArray.push(...flatArray(arr[index]));
//             // newArray.push.apply(newArray,flatArray(arr[index]));
//         }
//     }
//     return newArray;
// }


// const flatArray = (arr,result=[]) =>{
//     for(let index in arr){
//         if(!Array.isArray(arr[index])){
//             result.push(arr[index]);
//         }else{
//             flatArray(arr[index],result);
//         }
//     }
//     return result;
// }


// console.log(flatArray(numbers));






// phân trang 
// const customers = [
//     'user1',
//     'user2',
//     'user3',
//     'user4',
//     'user5',
//     'user6',
//     'user7',
//     'user8',
// ];
// const limit = 3;

// const getCustomer = (page = 1) => {
//     const index = (page - 1) * limit;
//     return customers.slice(index, index + limit);
// }

// console.log(getCustomer(2));

//vòng lặp
// foreach(callback) không breack được 
// users.forEach(function(user,index){
//     console.log(user,index);
// })


//map(callback) return gì trả về đấy / số lượng mảng mới = cũ
// const newArr = users.map(function(user,index){
//     console.log(users,index);
//     return `${index + 1} - ${user}`
// })

// console.log(newArr)


//filter(callback)
// const newArr = users.filter(function(user,index){
//     console.log(user,index);
//     //khi callback return về giá trị truthy ở phần tử nào, thêm phần tửu mới vào mảng
//     return index % 2===0;
// })
// console.log(newArr)



const fullName = "tạ    hoàng     an";
const newFullName = fullName.split(" ").filter((item)=>{
    return item!=="";
}).map((item)=>{
    return item.charAt(0).toUpperCase()+item.slice(1);
}).join(" ");
console.log(newFullName);




//tìm hiểu trước
// find()
// findIndex()
// findLast()
// findLastIndex()
// some()
// every()
// reduce()


//Array like-object