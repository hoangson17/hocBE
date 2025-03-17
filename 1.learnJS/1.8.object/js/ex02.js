// kế thừa các key của object
Object.prototype.message = "Unicode";

const a = {
    name : "hoang son",
    email : "hoangson@gmail.com",
};

const b = {
    age : 22,
    address : "ha noi",
}

// console.log(a.message);
// console.log(b.message);


// const users = [];
// console.log(users.message);

// const fullName = "hoangson";
// console.log(fullName.message);

// const check = true;
// console.log(check.message);

// const n = 5;
// console.log(n.message);

String.prototype.last = function(){
    console.log("last");
    console.log(this);
    return this.split(" ").slice(-1).join();
}
const fullName = "hoang son";
console.log(fullName.last());


Number.prototype.formatMoney = function(){
    return this.toLocaleString() + "đ";
}

const price =12000;
console.log(price.formatMoney());