// // Decorators: @
// function hello(){
//     console.log("hello");
//     return function(target:any,propertyKey:any,descripstion:any){
//         console.log("hello children");
//     }
// }

// function sayHi(){
//     console.log("hi");
//     return function(target:any,propertyKey:any,descripstion:any){
//         console.log("hi children");
//     }
// }

// function Unicode(constructor:Function){
//     console.log(constructor);
// }

// function Body(a:any,b:any,c:any){
//     console.log("Body");
    
// }

// @Unicode
// class User {
//     @sayHi()
//     @hello()
//     getName(@Body a:any){
//         console.log('getName');
//         console.log("a",a);
        
//     }
// }

// const user = new User();
// user.getName("typescript");