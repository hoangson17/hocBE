const employees = [
    { id: 1, name: "Mai", department: "IT", salary: 1200 },
    { id: 2, name: "Nam", department: "HR", salary: 800 },
    { id: 3, name: "Hà", department: "IT", salary: 1500 },
    { id: 4, name: "Linh", department: "Marketing", salary: 900 },
    { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

// Viết các hàm thực hiện các yêu cầu sau:

// Tính tổng lương của từng phòng ban.
// let it = 0;
// let hr = 0;
// let marketing = 0;

// employees.forEach((item)=>{
//     if(item.department === "IT"){
//         it += item.salary;
//     }
//     if(item.department === "HR"){
//         hr += item.salary;
//     }
//     if(item.department === "Marketing"){
//         marketing += item.salary;
//     }
// })

let totalSalary = {};
employees.forEach((item)=>{
    if(!totalSalary[item.department]){
        totalSalary[item.department] = item.salary;
    }else{
        totalSalary[item.department] += item.salary;
    }
})
console.log(totalSalary);


// console.log(it);
// console.log(hr);
// console.log(marketing);

// Tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.
let maxIt = 0;
let maxHr = 0;
let maxMarketing = 0;
employees.forEach((item)=>{
    if(maxIt < item.salary && item.department === "IT"){
        maxIt = item.salary;
    }
    if(maxHr < item.salary && item.department === "HR"){
        maxHr = item.salary;
    }
    if(maxMarketing < item.salary && item.department === "Marketing"){
        maxMarketing = item.salary;
    }
    
})
// console.log("max");
// console.log(maxIt);
// console.log(maxHr);
// console.log(maxMarketing);


// Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó.

let newEmployees = {};
employees.forEach((item)=>{
    if(!newEmployees[item.department]){
        newEmployees[item.department] = item;
    }else{
        if(!Array.isArray(newEmployees[item.department])){
            newEmployees[item.department] = [newEmployees[item.department]];
        }
        newEmployees[item.department].push(item);   
    }
})
console.log(newEmployees);
