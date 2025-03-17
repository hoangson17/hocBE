// Function Constructer

// this: context (ngữ cảnh)

// const user = {
//     fullName : "hoàng sơn",
//     email : "hoangson@gmail.com",
//     getInfo : function(){
//         // console.log(this);
//         const _this = this;
//         return{
//             age : 22,

//             // getAge(){
//             //     console.log(_this.email);
//             // }

//             // arrow function không lấy đc this hiện tại mà đẩy lên obj cha
//             getAge:()=>{
//                 console.log(this.email);
//             }
//         }
//     },
// };

// user.getInfo().getAge();


// function helloWord(){
//     console.log(this);
    
// }

// function helloWord(a,b){
//     console.log(this);
//     console.log(a);
//     console.log(b);
// }

// helloWord(); //trả về window

// function helloWord(){
//     console.log(this);
// }

// const hello = helloWord.bind("hoangson"); // trả về một hàm
// hello();
// helloWord.bind("hoangson")(); //trả một chuỗi

// console.log(this); //trả về window


// **vừa bind vừa call và có thể thêm đối số
// helloWord.call("unicode",10,20); 

// đối số là mảng và rải giá trị mảng vào đối số
// helloWord.apply("unicode",[10,20]);



// *** dùng hàm định nghĩa Object (dùng hàm thường không dùng đc arrow function)
// *** PascalCase : XinChaoAnhEm

// function User(){
//     this.name = "hoang an";
//     this.email = "hoangson@gmail.com";
//     this.getName = function(){
//         return this.name;
//     }
//     this.getEmail = function(){
//         return this.email;
//     }
// }


// contructor
// function User(name,email){ 
//     this.name = name; //non-static property
//     this.email = email; //none-static property
//     this.getName = function(){
//         //none-static method
//         return this.name;
//     }
//     this.getEmail = function(){
//          //none-static method
//         return this.email;
//     }
// }

// User.message = "ahihi"; //static property

// User.getMessage = function(){
//     // static method
//     return "Bhihi";
// }

// khởi tạo object bằng constructor
// const user = new User("hoang son","hoangson@gmail.com");
// console.log(user);
// console.log(user.name);
// console.log(user.getEmail());
// const customer = new User("hoang nam","hoangnam@gmail.com");
// console.log(customer);
// console.log(customer.getEmail());

// user, customer gọi là sự thể hiện cửa một user (instance)

// console.log(User.message);
// console.log(User.getMessage());


// User.prototype.something = function(){
//     console.log("something");
//     // làm thế nào để từ hàm này gọi được đến static property
//     console.log(this.constructor.message);
// }

// const user = new User("hoang son","hoangson@gmail.com");
// user.something();


// User.prototype.company = "unicode";

// User.getCompany = function(){
//     // làm thế nào để truy cập vào thuộc tính / phương thức non-static
//     console.log(new this().company);


//     // const instance = new this();
//     // console.log(instance.company);
// }
// User.getCompany();



function User(name,email){
    this.name = name;
    this.email = email;
}

// function Auth(){
// User.call(this);
// this.getProfile = function(){
//         console.log(this.name);
//         console.log(this.email);
//     };
// };

function Auth(name,email){
User.call(this,name,email);
this.getProfile = function(){
        console.log(this.name);
        console.log(this.email);
    };
};

const auth = new Auth("hoangson" ,"hoangson@gmail.com");
console.log(auth);
auth.getProfile();
// console.log(auth.name);
// console.log(auth.email);

