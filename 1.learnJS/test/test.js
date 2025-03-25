//find(callback)
// --tìm phần tử đầu tiên trong mảng thỏa mãn điều kiện callback -- hoặc trả về undefined

// const numbers = [1,2,3,4,5,6,7,8];
// let check = (num)=>{
//     return num > 5;
// }
// console.log(numbers.find(check));    


//findIndex(callback) 
// -- tìm vi trí(index) của phần tử đầu tiên thỏa mãn điều kiện của hàm callback -- nếu không có trả về -1

// console.log(numbers.findIndex(check));


// findLast(callback) 
// -- tương tự như find nhưng trả về phần tử cuối cùng

// console.log(numbers.findLast(check));


// findLastIndex(callback)
// -- tương tự như findIndex nhưng lại trả về vị trí cuối cùng -- không có trả về -1

// console.log(numbers.findLastIndex(check));


// some(callback)
// -- nếu có ít nhất 1 phần tử trong mảng thỏa mãn trả về true -- không cáo trả về false

// console.log(numbers.some(check));


//every(callback)
// -- kiểm tra tất cả phần tử mảng có thỏa mãn điều kiện không 
// -- thỏa mãn = true -- không = false

// console.log(numbers.every(check));




// reduce((accumulato,currentValue,Index,array)=>{
    // return newAcumulator
// }) 

// array.reduce((accumulator, currentValue, index, array) => { ... }, initialValue);

// tính toán và tổng hợp dựa trên các phần tử của mảng
// trả về giá trị tổng hợp sau khi duyệt qua toàn bộ mảng

// accumulator: Giá trị tích lũy (bắt đầu từ initialValue).
// currentValue: Phần tử hiện tại trong mỗi lần lặp.
// index (tuỳ chọn): Chỉ mục của phần tử hiện tại.
// array (tuỳ chọn): Chính mảng đang được xử lý.
// initialValue (tuỳ chọn): Giá trị khởi tạo cho accumulator. Nếu không có, reduce() sẽ lấy phần tử đầu tiên của mảng làm giá trị khởi tạo.

// const numbers1 = [10, 20, 30, 40];

// // tính tổng 
// let sum = numbers1.reduce((a,num)=>a+num,0);
// console.log(sum);


// **** Dùng call() để kế thừa thuộc tính

// function Human(name,age){
//     this.name = name;
//     this.age = age;
// }
// function Student(name,age,major){
//     Human.call(this,name,age);
//     this.major = major;
//     this.getInfor = function(){
//         return `${this.name} ${this.age} ${this.major}`;
//     }
// }

// let student = new Student("hoang son","21","IT");
// console.log(student.getInfor());

// console.log(student);


// **** kế thừa bằng prototype 
// function Animal(name){
//     this.name = name;
// }

// // Animal.prototype.speak=function(){
// //     return `${this.name} is making a sound!`;
// // }

// Animal.message = "ahihi";

// Animal.prototype.a = function(){
//     console.log(this.constructor.message);
// }

// let c = new Animal("qưeqwe");
// console.log(c);
// c.a();


async function retryWithBackoff (fn,retries,delay,maxDelay){
    for(let i = 0;i<retries;i++){
        try {
            return await fn();
        } catch (error) {
            if(delay <= maxDelay){
                if(i === retries -1) throw error;
                console.log("thất bại thử lại");
                await new Promise((resolve)=>setTimeout(resolve,delay));
                delay*=2;
            }else{
                throw new Error("vượt quá max delay");
            }       
        }
    }
}

const failingTask = ()=>{
    return new Promise((resolve,reject)=>{
        Math.random() > 0.8?resolve("thành công"):reject("thất bại, thử lại....")
    })
}

retryWithBackoff(failingTask,10,1000,10000).then(console.log).catch(console.error);