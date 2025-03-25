// Viết một hệ thống quản lý nhân viên gồm:

// Class Employee có các thuộc tính: name, age, salary và phương thức getInfo().
// Class Developer kế thừa từ Employee, thêm thuộc tính programmingLanguage.
// Class Manager kế thừa từ Employee, thêm thuộc tính employees (mảng các nhân viên mà họ quản lý).
// Manager có phương thức addEmployee(employee) để thêm nhân viên vào danh sách.

class Employee {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getInfo(){
        console.log(`${this.name}, age: ${this.age}, salary: ${this.salary} `);
    }
}

class Developer extends Employee {
    constructor(name, age, salary, programmingLanguage){
        super(name,age,salary);
        this.programmingLanguage = programmingLanguage;        
    }   
}

class Manager extends Employee {
    constructor(name,age,salary,employees,programmingLanguage){
        super(name,age,salary);
        this.employees = employees;
        this.programmingLanguage = programmingLanguage;
    }

    addEmployee(employee){
        if(!Array.isArray(this.employees)&&this.employees == undefined){
            this.employees = employee;
        }else{
            this.employees = [this.employees];
            this.employees.push(employee);
        }
    }

    getInfo(){
        console.log(`${this.name}, age: ${this.age}, salary: ${this.salary} `);
        this.employees.forEach(element => {
            console.log(element.name+" - Ngôn ngữ: "+ element.programmingLanguage);
        });
    }
}

const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");

const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);

manager.getInfo();
// Output:
// Alice - Tuổi: 35 - Lương: 8000
// Quản lý nhân viên:
//  - John, Ngôn ngữ: JavaScript
//  - Jane, Ngôn ngữ: Python